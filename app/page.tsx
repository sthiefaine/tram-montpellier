/* eslint-disable react/no-unescaped-entities */
"use server";
import {
  getIncidents,
  getIncidentsTerminated,
} from "./actions/incidents/incidents.actions";
import { getTramwayLinesWithStops } from "./actions/tweets/incidents.action";
import Timeline from "./components/cards/cards";
import styles from "./page.module.css";
import { startDate } from "@/data/horaires";

const generateHours = () => {
  const hours = [];
  for (let i = 4; i < 24 + 4; i++) {
    const hour = i % 24;
    const hourString = hour.toString().padStart(2, "0") + "h";
    hours.push(hourString);
  }
  return hours;
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
    const hour = Math.floor(minutes / 60) % 24;
    const minute = minutes % 60;
    const timeString = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    // Determine classes
    const classes = ["i"];
    if (minute === 0) classes.push("i1h");
    if (minute % 10 === 0) classes.push("i10m");

    intervals.push({ timeString, classes });
  }

  return intervals;
};

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

  // Adjust for end time if it's past midnight
  if (
    endHour < startHour ||
    (endHour === startHour && endMinute < startMinute)
  ) {
    endTime.setDate(endTime.getDate() + 1);
  }

  return currentTime >= startTime && currentTime <= endTime;
};

export default async function Page() {
  const hours = generateHours();
  const tramwayLines = await getTramwayLinesWithStops();
  const intervals = generateTimeIntervals();
  const { start, end } = getHoursForToday();
  const incidents = await getIncidents();
  const incidentsTerminated = await getIncidentsTerminated();

  return (
    <div>
      <h1 className={styles.title}>Suivi de l'état du trafic</h1>
      <span className={styles.date}>aujourd'hui</span>
      <section className={styles.section}>
        <div className={styles.timeBar}>
          {hours.map((hour, index) => (
            <span key={index} className={styles.timeSpan}>
              {hour}
            </span>
          ))}
        </div>
        <div className={styles.lines}>
          {tramwayLines.map((line, index) => (
            <div key={index} className={styles.line}>
              <div className={styles.lineName}>
                <span
                  className={styles.numero}
                  style={{ backgroundColor: line.color }}
                >
                  {line.numero}
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
                    isWithinTimeRange(interval.timeString, start, end)
                      ? "ok"
                      : "no"
                  }%`}
                ></a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sectionbot}>
        <div>
          <h1 className={styles.title}>Incidents en cours</h1>

          <Timeline incidents={incidents} />
        </div>

        <div>
          <h1 className={styles.title}>Incidents terminés</h1>

          <Timeline incidents={incidentsTerminated} />
        </div>
      </section>
    </div>
  );
}
