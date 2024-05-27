"use server";
import { Tweet } from "@/app/api/get_tweets/types";
import prisma from "@/lib/prisma";

export async function saveTweets(tweets: Tweet[]) {
  console.log("Saving tweets");
  const response = await prisma.tweet.createMany({
    data: tweets.map((tweet) => ({
      TweetCreatedAt: new Date(tweet.time),
      tweetId: tweet.tweetId,
      textContent: tweet.textContent,
    })),
    skipDuplicates: true,
  });

  const createdTweets = await prisma.tweet.findMany({
    where: {
      tweetId: {
        in: tweets.map((tweet) => tweet.tweetId),
      },
    },
  });

  return response.count === 0 ? [] : createdTweets;
}
