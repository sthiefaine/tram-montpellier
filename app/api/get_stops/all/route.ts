import { tramwayLinesData } from "@/data/lines";
import { NextResponse } from "next/server";

export async function GET() {
  // Requête pour récupérer les données des arrêts
  const response = await fetch('https://cartographie.tam-voyages.com/gtfs/stopsarea');
  const stopsData = await response.json();

  // Lignes que nous voulons filtrer
  const lineIdsToFilter = ['1', '2', '3', '4', '5'];

  // Structure JSON pour les lignes filtrées
  const filteredLines = lineIdsToFilter.map((line) => ({
    line,
    color: getLineColor(line),  // Fonction à définir pour obtenir la couleur
    stops: filterStopsByLine(line, stopsData),
  }));

  return NextResponse.json(filteredLines, { status: 200 });

};

// Fonction pour filtrer les arrêts d'une ligne donnée
const filterStopsByLine = (line: string, stopsData: any[]) => {
  return stopsData
    .filter(stop => stop.linked_lignes.some((linkedLine: any) => linkedLine.shortName === line))
    .map((stop: any) => ({
      name: stop.nom,
      lat: stop.lat,
      lng: stop.lng,
      isTerminus: false,
    }));
};

// Fonction pour obtenir la couleur de chaque ligne
const getLineColor = (line: string) => {
  return tramwayLinesData.find((lined) => lined.numero === line)?.color || "#000000";
// Retourne une couleur par défaut si la ligne n'est pas trouvée
};


