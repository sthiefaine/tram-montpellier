"use server";

import {
  getIncidents,
  getIncidentsTerminated,
} from "./actions/incidents/incidents.actions";
import Timeline from "./components/timeline/timeline";
import styles from "./page.module.css";
export default async function Home() {
  const incidents = await getIncidents();
  const incidentsTerminated = await getIncidentsTerminated();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Incidents en cours</h1>

          <Timeline incidents={incidents} />
        </section>

        <section className={styles.section}>
          <h1 className={styles.title}>Incidents terminés</h1>

          <Timeline incidents={incidentsTerminated} />
        </section>
      </main>
    </div>
  );
}
