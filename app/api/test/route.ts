import { generateContext } from "@/helpers/openai";
import prisma from "@/lib/prisma";
import { Tweet } from "@prisma/client";
import { NextResponse } from "next/server";

async function getTramwayLinesWithStops() {
  const tramwayLines = await prisma.tramwayLine.findMany({
    include: {
      stops: {
        select: {
          nom: true,
        },
      },
    },
  });

  const result = tramwayLines.map((line) => ({
    nom: line.nom,
    numero: line.numero,
    stops: line.stops.map((stop) => stop.nom),
  }));

  return result;
}

async function processTweetsForIncidents(tweets: Tweet[]) {
  const previousIncidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: false,
      allDay: false,
    },
  });

  // get tramays lines and stop from the database
  const tramwayLinesWithStops = await getTramwayLinesWithStops();

  const previousActifIncidentsList =
    previousIncidents.length > 0
      ? previousIncidents
      : "Pas de précédent incident actif.";

  return generateContext(tramwayLinesWithStops, previousActifIncidentsList);
}

export const GET = async () => {
  const test = await processTweetsForIncidents([]);
  return new NextResponse(JSON.stringify(test), {
    status: 200,
  });
};
