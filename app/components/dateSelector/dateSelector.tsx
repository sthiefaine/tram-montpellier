/* eslint-disable react/no-unescaped-entities */
"use client";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import styles from "./dateSelector.module.css";
import { useDateSelectorStore } from "@/store/dateSelector";

export default function DateSelector() {
  const { dateSelected, setDateSelected } = useDateSelectorStore();
  const isToday =
    dateSelected.toLocaleDateString("fr-fr", { timeZone: "UTC" }) ===
    new Date().toLocaleDateString("fr-fr", { timeZone: "UTC" });

  const handleChangedate = (isIncrement: boolean) => {
    if (isToday && isIncrement) return;
    const newDate = new Date(dateSelected);
    isIncrement
      ? newDate.setDate(newDate.getDate() + 1)
      : newDate.setDate(newDate.getDate() - 1);
    setDateSelected(newDate);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleChangedate(false)}>
        <CircleArrowLeft />
      </button>
      <span className={styles.date}>
        {dateSelected.toLocaleDateString("fr-fr", { timeZone: "UTC" })}
      </span>
      <button onClick={() => handleChangedate(true)} disabled={isToday}>
        <CircleArrowRight color={isToday ? "grey" : "black"} />
      </button>
    </div>
  );
}
