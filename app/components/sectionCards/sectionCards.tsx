"use client";
import { useShallow } from "zustand/react/shallow";
import Card from "../cards/cards";
import styles from "./sectionCards.module.css";
import { useDateSelectorStore } from "@/store/dateSelector";

export default function SectionCards() {
  const { dateSelected } = useDateSelectorStore(
    useShallow((state) => ({
      dateSelected: state.dateSelected,
    }))
  );

  return (
    <section className={styles.sectionCard}>
      <div>
        <h1 className={styles.title}>Incidents en cours</h1>

        {<Card date={dateSelected} />}
      </div>

      <div>
        <h1 className={styles.title}>Incidents terminés</h1>
        {<Card date={dateSelected} terminated />}
      </div>
    </section>
  );
}
