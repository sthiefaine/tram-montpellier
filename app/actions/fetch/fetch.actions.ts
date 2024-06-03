import prisma from "@/lib/prisma";

export async function postLastFetchTweet() {
  const lastFetchTweet = await prisma.lastFetchTweet.createMany({
    data: [
      {
        id: 1,
        lastFetch: new Date(),
      },
    ],
    skipDuplicates: true,
  });
  return lastFetchTweet;
}

export async function getLastFetchTweet() {
  const lastFetchTweet = await prisma.lastFetchTweet.findMany({
    where: {
      id: 1,
    },
  });
  return lastFetchTweet;
}

export async function postLastReport() {
  const LastReport = await prisma.lastReport.createMany({
    data: [
      {
        id: 1,
        lastReport: new Date(),
      },
    ],
    skipDuplicates: true,
  });
  return LastReport;
}

export async function getLastReport() {
  const LastReport = await prisma.lastReport.findMany({
    where: {
      id: 1,
    },
  });
  return LastReport;
}
