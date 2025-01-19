// https://cartographie.tam-voyages.com/gtfs/info-traffic/1
//https://cartographie.tam-voyages.com/gtfs/ligne/1/ordered-arrets

import prisma from "@/lib/prisma";

interface Stop {
  id: string;
  type: string;
  logical_stop: string;
  direction: boolean;
  direction_nom: string;
  code: string;
  nom: string;
  lat: string;
  lng: string;
  accessible: boolean;
  next_pass: boolean;
  isTerminus: boolean;
  isNodeOut: boolean;
  isNodeIn: boolean;
}

interface TramwayLine {
  id: number;
  type: string;
  nom: string;
  numero: string;
  couleur: string;
  couleur_text: string;
  stops: Stop[];
  ligne_param: {
    ordre: number;
    isVisible: boolean;
    bounds: [string, string];
    ligne_params: string;
    externalCode: string;
    type: string;
    name: string;
    ligneBackgroundColor: string;
    ligneTextColor: string;
    nom_aller: string;
    nom_retour: string;
    pdf: string;
    commercialId: string;
  };
}

const linesMock = [
  {
    id: 1,
    type: "tramway",
    nom: "Mosson - Odysseum",
    numero: "1",
    couleur: "#005CA9",
    couleur_text: "#FFFFFF",
    ligne_param: {
      ordre: 1,
      isVisible: true,
      bounds: ["43.640796, 3.813972", "43.599787, 3.923492"],
      ligne_params:
        '{"code_ligne":"TAM1","couleur_border":"#ffffff","couleur_ligne":"#005AA1","desc":"Mosson - Odysseum","titre_ligne":"Tramway 1"}',
      externalCode: "TAM1",
      type: "1",
      name: "1",
      ligneBackgroundColor: "005AA1",
      ligneTextColor: "ffffff",
      nom_aller: "Odysseum",
      nom_retour: "Mosson",
      pdf: "https://bit.ly/L1_TaM",
      commercialId: "1",
    },
  },
];

export async function GET(){
  const lines = await fetch(
    "https://cartographie.tam-voyages.com/gtfs/lignes"
  ).then((res) => res.json());
  const tramsLines = lines.filter(
    (line: TramwayLine) => line.type === "tramway"
  );

  const tramwayLinesWithStops = await Promise.all(
    tramsLines.map(async (line: TramwayLine) => {
      const response = await fetch(
        `https://cartographie.tam-voyages.com/gtfs/ligne/${line.id}/ordered-arrets`
      );
      const linesWithStops = await response.json();
      const stopsArray = Object.values(linesWithStops.stops);

      const parsedStops = stopsArray.map((stop: any) => ({
        nom: stop.nom,
        code: stop.code,
        direction: stop.direction,
        logical_stop: stop.logical_stop,
        isTerminus: stop.isTerminus,
        lat: stop.lat,
        lng: stop.lng,
        accessible: stop.accessible ?? false,
      }));

      const parsedLine = {
        nom: line.nom,
        numero: line.numero,
        couleur: line.couleur,
        externalCode: line.ligne_param.externalCode,
        name: line.ligne_param.name,
        commercialId: line.ligne_param.commercialId,
        stops: parsedStops,
      };

      return parsedLine;
    })
  );

  for (const line of tramwayLinesWithStops) {
    // Vérifier si la ligne de tramway existe déjà dans la base de données
    const existingLine = await prisma.tramwayLine.findFirst({
      where: {
        externalCode: line.externalCode, // Utilisez un champ unique pour identifier la ligne de tramway, comme externalCode
      },
    });

    if (existingLine) {
      console.log(
        `La ligne de tramway avec externalCode ${line.externalCode} existe déjà dans la base de données.`
      );
    } else {
      // Créer la ligne de tramway et ses arrêts
      const createdLine = await prisma.tramwayLine.create({
        data: {
          nom: line.nom,
          numero: line.numero,
          couleur: line.couleur,
          externalCode: line.externalCode,
          name: line.name,
          commercialId: line.commercialId,
          stops: {
            create: line.stops.map((stop: Stop, index: number) => ({
              nom: stop.nom,
              code: stop.code,
              direction: stop.direction ?? false,
              logical_stop: stop.logical_stop,
              isTerminus: stop.isTerminus ?? false,
              lat: stop.lat,
              lng: stop.lng,
              accessible: stop.accessible,
              order: index + 1,
            })),
          },
        },
        include: {
          stops: true,
        },
      });

      console.log(
        `Ligne de tramway ${createdLine.nom} enregistrée avec succès avec ${createdLine.stops.length} arrêts.`
      );
    }
  }

  return new Response(JSON.stringify(tramwayLinesWithStops), {
    headers: {
      "content-type": "application/json",
    },
  });
};
