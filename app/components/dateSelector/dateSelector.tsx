/* eslint-disable react/no-unescaped-entities */
"use client";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import styles from "./dateSelector.module.css";
import { useDateSelectorStore } from "@/store/dateSelector";
import { useState } from "react";

export default function DateSelector() {
  const { dateSelected, setDateSelected } = useDateSelectorStore();
  const [newDate, setNewDate] = useState<Date>(dateSelected);
  const todayDate = new Date();

  const isToday =
    dateSelected.getDate() === todayDate.getDate() &&
    dateSelected.getMonth() === todayDate.getMonth() &&
    dateSelected.getFullYear() === todayDate.getFullYear();

  const handleChangeDate = (isIncrement: boolean) => {
    if (isToday && isIncrement) return;

    setDateSelected(
      new Date(
        isIncrement
          ? newDate.setDate(newDate.getDate() + 1)
          : newDate.setDate(newDate.getDate() - 1)
      )
    );
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleChangeDate(false)}>
        <CircleArrowLeft />
      </button>
      <span className={styles.date}>
        {dateSelected.toLocaleDateString("fr-FR")}
      </span>
      <button onClick={() => handleChangeDate(true)} disabled={isToday}>
        <CircleArrowRight color={isToday ? "grey" : "black"} />
      </button>
    </div>
  );
}
