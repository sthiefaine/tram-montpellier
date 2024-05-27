export const maxDuration = 180;
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getLastTweet } from "./captureTweets";
import { saveTweets } from "@/app/actions/tweets/tweets.actions";
import { processTweetsForIncidents } from "@/app/actions/tweets/incidents.action";
import prisma from "@/lib/prisma";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const lastTweets = await getLastTweet();

  const savedTweets = await saveTweets(lastTweets);

  const numberOfLastTweets = lastTweets.length;
  const numberOfSavedTweets = savedTweets.length;

  if (numberOfLastTweets === 0) {
    return new NextResponse("Pas de nouveaux message", {
      status: 200,
    });
  } else if (numberOfSavedTweets === 0) {
    return new NextResponse("Pas de nouveau message sauvegardé", {
      status: 200,
    });
  } else {
    // SCANNING PROCESS TO GET INCIDENTS
    const incident = await processTweetsForIncidents(savedTweets);

    return new NextResponse(incident, {
      status: 200,
    });

    if (incident.incident.length !== 0) {
      await prisma.incident.createMany({
        data: incident.incident.map((incident: any) => ({
          ...incident,
        })),
        skipDuplicates: true,
      });
    }

    if (incident.incidentModifications.length !== 0) {
      await prisma.incident.updateMany({
        where: {
          id: incident.incidentModifications.map(
            (incident: any) => incident.id
          ),
        },
        data: {
          incidentDescription: incident.incidentModifications.map(
            (incident: any) => incident.incidentDescription
          ),
          estimatedStartTime: incident.incidentModifications.map(
            (incident: any) => incident.estimatedStartTime
          ),
          estimatedEndTime: incident.incidentModifications.map(
            (incident: any) => incident.estimatedEndTime
          ),
        },
      });
    }

    if (incident.incidentClose.length !== 0) {
      await prisma.incident.updateMany({
        where: {
          id: incident.incidentClose.map((incident: any) => incident.id),
        },
        data: {
          incidentTerminated: true,
          incidentDuration: incident.incidentClose.map(
            (incident: any) => incident.incidentDuration
          ),
        },
      });
    }

    console.log("URGENT", incident);

    // todo
    // generate a response with the saved tweets
    return new NextResponse(JSON.stringify(incident), {
      status: 200,
    });
  }
};
