import styles from "./lines.module.css";
import { startDate } from "@/data/horaires";
import { useState } from "react";
import { tramwayLinesData } from "@/data/lines";

const getHoursForToday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  let hours = null;
  const daysOfWeek = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];

  // Jour de la semaine actuel en texte
  const todayText = daysOfWeek[dayOfWeek];

  for (const entry of startDate) {
    const days = entry.when.split(", ").map((day) => day.trim());
    if (days.includes(todayText)) {
      return (hours = {
        start: entry.start,
        end: entry.end,
      });
    }
  }

  return (hours = {
    start: "04h30",
    end: "02h00",
  });
};

const generateTimeIntervals = () => {
  const intervals = [];
  const startHour = 4;
  const endHour = 3;
  const totalMinutesInDay = 24 * 60;

  for (
    let minutes = startHour * 60;
    minutes < totalMinutesInDay + endHour * 60;
    minutes += 2
  ) {
    // 26 // to fix later :D
    const hour = Math.floor(minutes / 60) % 26;
    const minute = minutes % 60;
    const timeString = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    const classes = ["i"];
    if (minute === 0) classes.push("i1h");
    if (minute % 10 === 0) classes.push("i10m");

    intervals.push({ timeString, classes });
  }

  return intervals;
};

const isWithinTimeRange = (time: string, start: string, end: string) => {
  const [startHour, startMinute] = start.split("h").map(Number);
  const [endHour, endMinute] = end.split("h").map(Number);
  const [currentHour, currentMinute] = time.split(":").map(Number);

  const startTime = new Date();
  startTime.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  const currentTime = new Date();
  currentTime.setHours(currentHour, currentMinute, 0, 0);

  if (
    endHour < startHour ||
    (endHour === startHour && endMinute < startMinute)
  ) {
    endTime.setDate(endTime.getDate() + 1);
  }

  return currentTime >= startTime && currentTime <= endTime;
};

export default function Lines() {
  const intervals = generateTimeIntervals();
  const { start, end } = getHoursForToday();
  const [tramwayLines, setTramwayLines] = useState(tramwayLinesData);

  return (
    <div className={styles.lines}>
      {tramwayLines.map((line, index) => (
        <div key={index} className={styles.line}>
          <div className={styles.lineName}>
            <span
              className={styles.numero}
              style={{ backgroundColor: (line as { color: string }).color }}
            >
              {(line as { numero: string }).numero}
            </span>
          </div>
          {intervals.map((interval, index) => (
            <a
              key={index}
              className={
                (isWithinTimeRange(interval.timeString, start, end)
                  ? "ok"
                  : "no") +
                " " +
                interval.classes.join(" ")
              }
              title={`${interval.timeString}%${
                isWithinTimeRange(interval.timeString, start, end) ? "ok" : "no"
              }%`}
            ></a>
          ))}
        </div>
      ))}
    </div>
  );
}
