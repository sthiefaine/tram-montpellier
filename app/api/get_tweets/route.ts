export const maxDuration = 200;
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getLastTweet } from "./captureTweets";
import { saveTweets } from "@/app/actions/tweets/tweets.actions";
import { processTweetsForIncidents } from "@/app/actions/tweets/incidents.action";
import {
  closeIncident,
  createIncident,
  parentIncident,
  updateIncident,
} from "@/app/actions/incidents/incidents.actions";
import { postLastFetchTweet } from "@/app/actions/fetch/fetch.actions";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const lastTweets = await getLastTweet();

  const savedTweets = await saveTweets(lastTweets);

  const numberOfLastTweets = lastTweets.length;
  const numberOfSavedTweets = savedTweets.length;

  await postLastFetchTweet();

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
    const responseText = await processTweetsForIncidents(savedTweets);

    const jsonStartIndex = responseText.indexOf("[");
    const jsonEndIndex = responseText.lastIndexOf("]") + 1;
    const jsonString = responseText.slice(jsonStartIndex, jsonEndIndex);

    // console.log("JSON STRING DONE", jsonString);
    // Parse the JSON string into an object
    const incidents = JSON.parse(jsonString);

    // Filter the incidents
    const filteredNewIncidents = incidents
      .map((item: any) => item.incident)
      .filter(Boolean);
    const filteredCloseIncidents = incidents
      .map((item: any) => item.incidentClose)
      .filter(Boolean);
    const filteredModificationsIncidents = incidents
      .map((item: any) => item.incidentModifications)
      .filter(Boolean);

    // Convert the filtered incidents back to JSON string
    const filteredIncidentsJson: parentIncident = {
      incident: filteredNewIncidents,
      incidentModifications: filteredModificationsIncidents,
      incidentClose: filteredCloseIncidents,
    };

    if (filteredIncidentsJson.incident.length !== 0) {
      console.log("===> CREATE INCIDENT");
      await createIncident(filteredIncidentsJson);
    }

    if (filteredIncidentsJson.incidentModifications.length !== 0) {
      console.log("===> UPDATE INCIDENT");
      await updateIncident(filteredIncidentsJson);
    }

    if (filteredIncidentsJson.incidentClose.length !== 0) {
      console.log("===> CLOSE INCIDENT");
      await closeIncident(filteredIncidentsJson);
    }

    return new NextResponse(JSON.stringify(filteredIncidentsJson), {
      status: 200,
    });
  }
};
