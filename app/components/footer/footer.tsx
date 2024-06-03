"use server";
import {
  getLastFetchTweet,
  getLastReport,
} from "@/app/actions/fetch/fetch.actions";
import styles from "./footer.module.css";

export default async function Footer() {
  const lastFetchTweet = await getLastFetchTweet();
  const lastReport = await getLastReport();
  return (
    <div className={styles.footer}>
      <p> last update: {lastFetchTweet[0]?.lastFetch.toTimeString()}</p>
      <p> last Report: {lastReport[0]?.lastReport.toTimeString()}</p>
    </div>
  );
}
