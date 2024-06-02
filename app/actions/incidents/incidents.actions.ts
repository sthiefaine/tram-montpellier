"use server";
import prisma from "@/lib/prisma";
import { Incident } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  // next day at 2am
  const endOfDay = new Date(
    date.setDate(date.getDate() + 1) && date.setHours(2, 0, 0, 0)
  );

  const incidents = await prisma.incident.findMany({
    where: {
      time: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });
  return incidents;
}

export async function getIncidentsForDate(date: Date, isTerminated: boolean) {
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  const incidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: isTerminated,
      time: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });
  return incidents;
}

export async function createIncident(filteredIncidentsJson: parentIncident) {
  const createIncident = await prisma.incident.createMany({
    data: filteredIncidentsJson.incident.map((incident: Incident) => ({
      ...incident,
    })),
    skipDuplicates: true,
  });
  revalidatePath("/");
  return createIncident;
}

export async function updateIncident(filteredIncidentsJson: parentIncident) {
  const updateIncident = await filteredIncidentsJson.incidentModifications.map(
    async (incident: Incident) => {
      await prisma.incident.update({
        where: {
          tweetId: incident.keyTweetIdIncident,
        },
        data: {
          ...incident,
        },
      });
    }
  );
  revalidatePath("/");
  return updateIncident;
}

export async function closeIncident(filteredIncidentsJson: parentIncident) {
  const closeIncident = await prisma.incident.createMany({
    data: filteredIncidentsJson.incidentClose.map((incident: Incident) => ({
      ...incident,
    })),
    skipDuplicates: true,
  });
  revalidatePath("/");
  return closeIncident;
}
