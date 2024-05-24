import { NextRequest, NextResponse } from "next/server";
import { getLastTweet } from "./captureTweets";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const lastTweets = await getLastTweet();

  if (!lastTweets) {
    return new NextResponse(null, {
      status: 500,
    });
  } else {
    // todo
    return new NextResponse(JSON.stringify(lastTweets), {
      status: 200,
    });
  }
};
