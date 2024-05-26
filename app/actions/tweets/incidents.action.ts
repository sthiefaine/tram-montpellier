import { generateContext } from "@/helpers/openai";
import { openai } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { Tweet } from "@prisma/client";

async function getTramwayLinesWithStops() {
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
    stops: line.stops.map((stop) => stop.nom),
  }));

  return result;
}

export async function processTweetsForIncidents(tweets: Tweet[]) {
  const previousIncidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: false,
      allDay: false,
    },
  });

  // get tramays lines and stop from the database
  const tramwayLinesWithStops = await getTramwayLinesWithStops();

  const previousActifIncidentsList =
    previousIncidents.length > 0
      ? previousIncidents
      : "Pas de précédent incident actif.";

  const context = generateContext(
    tramwayLinesWithStops,
    previousActifIncidentsList
  );

  // Construire le prompt pour OpenAI
  let prompt = `Analyse les tweets suivants et retourne une liste d'incidents ou modifie les incidents precedents si n'ecessaire, ils doivent etre structurés au format JSON.\n\n`;
  tweets.forEach((tweet, index) => {
    prompt += `Tweet ${index + 1}: "${tweet.textContent}"\n`;
  });

  const openaiResponse = await openai.chat.completions.create({
    model: "llama-3-8b-instruct",
    stream: false,
    messages: [
      { role: "system", content: context },
      { role: "user", content: prompt },
    ],
    max_tokens: 2000,
    temperature: 0.5,
  });
  const incidents = JSON.parse(
    openaiResponse.choices[0]?.message?.content?.trim() ?? "[]"
  );

  return incidents;
}
