"use server";
import {
  getLastFetchTweet,
  getLastReport,
} from "@/app/actions/fetch/fetch.actions";
import styles from "./footer.module.css";

export default async function Footer() {
  const lastFetchTweet = await getLastFetchTweet();
  const lastReport = await getLastReport();

  const lastTweetDate = lastFetchTweet[0]?.lastFetch.toLocaleDateString(
    "fr-FR",
    {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );

  const lastReportDate = lastReport[0]?.lastReport.toLocaleDateString("fr-FR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={styles.footer}>
      <p> last update: {lastTweetDate}</p>
      <p> last Report: {lastReportDate}</p>
    </div>
  );
}
