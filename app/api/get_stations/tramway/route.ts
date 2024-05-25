interface LinkedLine {
  id: number;
  externalCode: string;
  shortName: string;
  type: string;
}

interface Stop {
  id: string;
  stop_code: string;
  type: string;
  nom: string;
  lat: string;
  lng: string;
  accessible: boolean;
  logical_stop: string;
  angle: number | null;
  width: number | null;
  isEdit: boolean;
  linked_stops: string[];
  linked_lignes: LinkedLine[];
  external_id: string;
}

export const GET = async () => {
  const data = await fetch(
    "https://cartographie.tam-voyages.com/gtfs/stopsarea"
  ).then((res) => res.json());

  const tramStops = data.filter((stop: Stop) =>
    stop.linked_lignes.some((ligne) => ligne.type === "tramway")
  );

  const tramLines: { [key: string]: string[] } = {};

  tramStops.forEach((stop: Stop) => {
    stop.linked_lignes.forEach((ligne) => {
      if (ligne.type === "tramway") {
        if (!tramLines[ligne.shortName]) {
          tramLines[ligne.shortName] = [];
        }
        tramLines[ligne.shortName].push(stop.nom);
      }
    });
  });

  return new Response(JSON.stringify(tramLines), {
    headers: {
      "content-type": "application/json",
    },
  });
};
