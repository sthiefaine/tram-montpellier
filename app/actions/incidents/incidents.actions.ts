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
          id: incident.id,
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
