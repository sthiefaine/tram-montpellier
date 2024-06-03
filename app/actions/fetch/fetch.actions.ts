import prisma from "@/lib/prisma";

export async function postLastFetchTweet() {
  const id = 1;
  const newLastFetch = new Date();

  try {
    const lastFetchTweet = await prisma.lastFetchTweet.upsert({
      where: { id: id },
      update: { lastFetch: newLastFetch },
      create: { id: id, lastFetch: newLastFetch },
    });
    return lastFetchTweet;
  } catch (error) {
    throw error;
  }
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
  const id = 1;
  const newLastFetch = new Date();

  try {
    const lastReport = await prisma.lastReport.upsert({
      where: { id: id },
      update: { lastReport: newLastFetch },
      create: { id: id, lastReport: newLastFetch },
    });
    return lastReport;
  } catch (error) {
    throw error;
  }
}

export async function getLastReport() {
  const LastReport = await prisma.lastReport.findMany({
    where: {
      id: 1,
    },
  });
  return LastReport;
}
