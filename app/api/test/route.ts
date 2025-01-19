/* eslint-disable prefer-const */
// pages/api/fetchFeatures.ts
import { NextApiRequest, NextApiResponse } from "next";
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

// Fonction handler de l'API
export async function GET() {
  const xValues = [2091, 2092];
  const yValues = [1494, 1495, 1496];
  let allFeatures: Feature[] = [];

  try {
    // Boucle sur toutes les combinaisons de x et y
    for (let x of xValues) {
      for (let y of yValues) {
        const url = `https://map.actigraph.com/tiles_lignes/tamtravaux/phase2new/phase2_tiles.php?z=12&x=${x}&y=${y}`;

        // Utilisation de fetch pour récupérer les données
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Erreur lors de la récupération des données pour x=${x}, y=${y}`
          );
        }

        const data = await response.json();

        // Filtrer les features pour les lignes TAM33 et TAM1
        const filteredFeatures = data.features.filter(
          (feature: Feature) =>
            feature.properties.code_ligne === "TAM1" ||
            feature.properties.code_ligne === "TAM2" ||
            feature.properties.code_ligne === "TAM3" ||
            feature.properties.code_ligne === "TAM4" ||
            feature.properties.code_ligne === "TAM5"
        );

        // Fusionner les features filtrées dans allFeatures
        allFeatures = [...allFeatures, ...filteredFeatures];
      }
    }

    // Retourner le JSON fusionné
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
