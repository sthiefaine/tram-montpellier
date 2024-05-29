"use client";
import { useEffect, useRef } from "react";
import Lines from "../lines/lines";
import styles from "./timeline.module.css";
import { useDateSelectorStore } from "@/store/dateSelector";

const generateHours = () => {
  const hours = [];
  for (let i = 4; i < 24 + 4; i++) {
    const hour = i % 24;
    const hourString = hour.toString().padStart(2, "0") + "h";
    hours.push(hourString);
  }
  return hours;
};

export default function Timeline() {
  const date = new Date();
  const hours = generateHours();
  const dateSelected = useDateSelectorStore((state) => state.dateSelected);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const isToday = dateSelected.toDateString() === new Date().toDateString();
  const targetHour = date.getHours();

  useEffect(() => {
    if (!isToday) return;
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = targetHour;

    const scrollHorizontally = () => {
      scrollContainer?.scrollBy({
        left: scrollAmount * 60,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(() => {
      scrollHorizontally();

      // Nettoyer l'intervalle après le premier défilement
      clearInterval(intervalId);
    }, 1500);
  }, [isToday, targetHour]);

  return (
    <section ref={scrollContainerRef} className={styles.section}>
      <div className={styles.timeBar}>
        {hours.map((hour, index) => (
          <span key={index} className={styles.timeSpan}>
            {hour}
          </span>
        ))}
      </div>
      <Lines />
    </section>
  );
}
