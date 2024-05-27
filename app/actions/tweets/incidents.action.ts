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

  let prompt = `Voici la liste des tweets récent à analyser:\n\n`;
  tweets.forEach((tweet, index) => {
    prompt += `Tweet ${tweet.tweetId} - ${tweet.TweetCreatedAt}: ${tweet.textContent}\n\n`;
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

  const incidents = openaiResponse.choices[0]?.message?.content?.trim() ?? "[]";

  return incidents;
}
