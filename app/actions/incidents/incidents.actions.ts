"use server";
import prisma from "@/lib/prisma";
import { Incident } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { toTimeZone } from "@/helpers/date";
import { toDate } from "date-fns-tz";

export type parentIncident = {
  incident: Incident[];
  incidentModifications: Incident[];
  incidentClose: Incident[];
};

export async function getIncidents() {
  const incidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: false,
    },
  });
  return incidents;
}

export async function getIncidentsTerminated() {
  const incidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: true,
    },
  });
  return incidents;
}

export async function getIncidentsAllForDate(date: Date) {
  const startDate = date;
  const startOfDay = new Date(startDate.setHours(0, 0, 0, 0));
  // next day at 2am
  const endDate = date;
  const endOfDay = new Date(
    endDate.setDate(endDate.getDate() + 1) && endDate.setHours(2, 0, 0, 0)
  );

  const incidents = await prisma.incident.findMany({
    where: {
      time: {
        gte: toTimeZone(startOfDay),
        lte: toTimeZone(endOfDay),
      },
    },
  });

  return incidents;
}

export async function getIncidentsForDate(date: Date, isTerminated: boolean) {
  const startDate = date;
  const endDate = date;

  const startOfDay = new Date(startDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(
    endDate.setDate(endDate.getDate() + 1) && endDate.setHours(2, 0, 0, 0)
  );

  const incidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: isTerminated,
      time: {
        gte: toTimeZone(startOfDay),
        lte: toTimeZone(endOfDay),
      },
    },
  });
  return incidents;
}

export async function createIncident(filteredIncidentsJson: parentIncident) {
  const uptadeTime = filteredIncidentsJson.incident.map((incident) => {
    return {
      ...incident,
      localisationIncident:
        incident.localisationIncident === null
          ? ""
          : incident.localisationIncident,
      time: incident.time,
    };
  });

  const createIncident = await prisma.incident.createMany({
    data: uptadeTime.map((incident: Incident) => ({
      ...incident,
    })),
    skipDuplicates: true,
  });
  revalidatePath("/");
  return createIncident;
}

export async function updateIncident(filteredIncidentsJson: parentIncident) {
  const uptadeTime = filteredIncidentsJson.incidentModifications.map(
    (incident) => {
      return {
        ...incident,
        localisationIncident:
          incident.localisationIncident === null
            ? ""
            : incident.localisationIncident,
        time: incident.time,
      };
    }
  );

  const updateIncident = await uptadeTime.map(async (incident: Incident) => {
    await prisma.incident.update({
      where: {
        tweetId: incident.keyTweetIdIncident,
      },
      data: {
        ...incident,
      },
    });
  });
  revalidatePath("/");
  return updateIncident;
}

export async function closeIncident(filteredIncidentsJson: parentIncident) {
  filteredIncidentsJson.incidentClose.map((incident) => {
    return {
      ...incident,
      localisationIncident:
        incident.localisationIncident === null
          ? ""
          : incident.localisationIncident,
      time: incident.time,
    };
  });

  const closeIncident = await prisma.incident.createMany({
    data: filteredIncidentsJson.incidentClose.map((incident: Incident) => ({
      ...incident,
    })),
    skipDuplicates: true,
  });
  revalidatePath("/");
  return closeIncident;
}
