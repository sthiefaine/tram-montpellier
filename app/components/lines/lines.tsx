import styles from "./lines.module.css";
import { startDate } from "@/data/horaires";
import { Fragment, useEffect, useState } from "react";
import { tramwayLinesData } from "@/data/lines";
import {
  getIncidentsAllForDate,
  getIncidentsForDate,
} from "@/app/actions/incidents/incidents.actions";
import { useDateSelectorStore } from "@/store/dateSelector";
import { Incident } from "@prisma/client";

const getHoursForSelectedDate = (dateSelected: Date) => {
  const dayOfWeek = dateSelected.getDay();
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
  const dateSelected = useDateSelectorStore((state) => state.dateSelected);
  const intervals = generateTimeIntervals();
  const { start, end } = getHoursForSelectedDate(dateSelected);
  const [tramwayLines, setTramwayLines] = useState(tramwayLinesData);
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [incidentSelected, setIncidentSelected] = useState<Incident>();
  const [lineSelected, setLineSelected] = useState<string>("");

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await getIncidentsAllForDate(dateSelected);
      console.log(response[1].time.toTimeString().slice(0, 5));
      setIncidents(response);
    };

    fetchIncidents();
  }, [dateSelected]);

  const incidentsForLineOnInterval = (line: string, interval: string) => {
    if (!incidents) return [];
    return incidents?.filter((incident) => {
      return (
        incident.tramsImpacted.includes(line) &&
        incident.time.toTimeString().slice(0, 5) === interval
      );
    });
  };

  const handleIncidentClick = (lineNumber: string, timeString: string) => {
    const result = incidentsForLineOnInterval(lineNumber, timeString);
    setIncidentSelected(result[0] || null);
    setLineSelected(lineNumber === lineSelected ? "" : lineNumber);
  };

  return (
    <div className={styles.lines}>
      {tramwayLines.map((line, index) => (
        <div className={styles.lineContainer} key={index}>
          <div className={styles.line}>
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
                onClick={() =>
                  handleIncidentClick(
                    (line as { numero: string }).numero,
                    interval.timeString
                  )
                }
                key={index}
                className={
                  (isWithinTimeRange(interval.timeString, start, end)
                    ? incidentsForLineOnInterval(
                        (line as { numero: string }).numero,
                        interval.timeString
                      ).length > 0
                      ? "incident"
                      : "ok"
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
          <div className={styles.incidents}>
            {lineSelected === line.numero &&
              incidentSelected?.incidentDescription}
          </div>
        </div>
      ))}
    </div>
  );
}
