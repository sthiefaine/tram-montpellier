import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Récupérer les lignes de tramway et leurs arrêts
    const tramwayLines = await prisma.tramwayLine.findMany({
      include: {
        stops: {
          orderBy: {
            order: 'asc',
          },
        },
      },
    });

    // Transformer les données
    const result = tramwayLines.map((line) => ({
      line: line.numero,
      color: line.couleur,
      stops: line.stops.map((stop) => ({
        lat: stop.lat,
        lng: stop.lng,
        name: stop.nom,
        isTerminus: stop.isTerminus,
      })),
    }));

    // Retourner les données au format JSON
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des données.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
