/* eslint-disable prefer-const */
// pages/api/fetchFeatures.ts
import { NextResponse } from "next/server";

// Définir les types des objets "features"
interface FeatureProperties {
  code_ligne: string;
}

interface Feature {
  type: string;
  properties: FeatureProperties;
  geometry: any;
}

export async function GET() {
  const xValues = [2091, 2092, 2093];
  const yValues = [1494, 1495, 1496, 1487];
  let allFeatures: Feature[] = [];

  try {
    for (let x of xValues) {
      for (let y of yValues) {
        //https://map.actigraph.com/tiles_lignes/tamtravaux/phase2new/phase2_tiles.php?z=12&x=2093&y=1497
        const url = `https://map.actigraph.com/tiles_lignes/tamtravaux/phase2new/phase2_tiles.php?z=12&x=${x}&y=${y}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Erreur lors de la récupération des données pour x=${x}, y=${y}`
          );
        }

        const data = await response.json();

        const filteredFeatures = data.features.filter(
          (feature: Feature) =>
            feature.properties.code_ligne === "TAM1" ||
            feature.properties.code_ligne === "TAM2" ||
            feature.properties.code_ligne === "TAM3" ||
            feature.properties.code_ligne === "TAM4" ||
            feature.properties.code_ligne === "TAM5"
        );

        allFeatures = [...allFeatures, ...filteredFeatures];
      }
    }
    return new NextResponse(JSON.stringify(allFeatures), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Une erreur est survenue"), {
      status: 500,
    });
  }
}
