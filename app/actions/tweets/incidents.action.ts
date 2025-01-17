import { generateContext } from "@/helpers/openai";
import { openai, openAIModel } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { Tweet } from "@prisma/client";
import { getTramwayLinesWithStops } from "../tramway/tramway.actions";
import { postLastReport } from "../fetch/fetch.actions";

export async function processTweetsForIncidents(tweets: Tweet[]) {
  console.log('incident 1')
  const startOfDay = new Date(new Date().setHours(0, 0, 0, 0));
  const previousIncidents = await prisma.incident.findMany({
    where: {
      incidentTerminated: false,
      allDay: false,
      time: {
        gte: startOfDay,
      },
    },
    take: 4,
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

  let prompt = `Voici la liste des tweets récent à analyser et renvoyer un JSON uniquement sans explications :\n\n`;
  tweets.forEach((tweet, index) => {
    prompt += `Tweet ${tweet.tweetId} - ${tweet.TweetCreatedAt}: ${tweet.textContent}\n\n`;
  });

  console.log('incident 2')
  const openaiResponse = await openai.chat.completions.create({
    model: openAIModel,
    stream: false,
    messages: [
      { role: "system", content: context },
      { role: "user", content: prompt },
    ],
    max_tokens: 4200,
    temperature: 0.5,
  });

  const incidents = openaiResponse.choices[0]?.message?.content?.trim() ?? "[]";

  console.log('incident response', incidents)
  await postLastReport();

  return incidents;
}
