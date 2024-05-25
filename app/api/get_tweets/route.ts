export const maxDuration = 180;
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getLastTweet } from "./captureTweets";
import { saveTweets } from "@/app/actions/tweets/tweets.actions";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const lastTweets = await getLastTweet();

  const savedTweets = await saveTweets(lastTweets);

  const numberOfLastTweets = lastTweets.length;
  const numberOfSavedTweets = savedTweets.length;

  if (numberOfLastTweets === 0) {
    return new NextResponse("Pas de nouveaux message", {
      status: 200,
    });
  } else if (numberOfSavedTweets === 0) {
    return new NextResponse("Pas de nouveau message sauvegardé", {
      status: 200,
    });
  } else {
    // todo
    return new NextResponse(JSON.stringify(savedTweets), {
      status: 200,
    });
  }
};
