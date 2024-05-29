"use server";

import prisma from "@/lib/prisma";

export async function getTramwayLinesWithStops() {
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
    color: line.couleur,
    stops: line.stops.map((stop) => stop.nom),
  }));

  return result;
}
