"use client";
import styles from "./lines.module.css";
import { startDate } from "@/data/horaires";
import { useEffect, useState } from "react";
import { tramwayLinesData } from "@/data/lines";
import { getIncidentsAllForDate } from "@/app/actions/incidents/incidents.actions";
import { useDateSelectorStore } from "@/store/dateSelector";
import { Incident } from "@prisma/client";

const getHoursForSelectedDate = (dateSelected: Date) => {
  const daysOfWeek = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const todayText = daysOfWeek[dateSelected.getDay()];

  for (const entry of startDate) {
    if (
      entry.when
        .split(", ")
        .map((day) => day.trim())
        .includes(todayText)
    ) {
      return { start: entry.start, end: entry.end };
    }
  }

  return { start: "04h30", end: "02h00" };
};

type Intervals = {
  timeString: string;
  classes: string[];
  isRunning?: boolean;
  incidents?: {
    [key: string]: boolean;
  };
};

const generateTimeIntervals = (): Intervals[] => {
  const intervals: Intervals[] = [];
  const startHour = 4;
  const endHour = 3;
  const totalMinutesInDay = 24 * 60;

  for (
    let minutes = startHour * 60;
    minutes < totalMinutesInDay + endHour * 60;
    minutes += 1
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

  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  const currentMinutes = currentHour * 60 + currentMinute;

  if (
    endMinutes < startMinutes ||
    (endHour === startHour && endMinute < startMinute)
  ) {
    return currentMinutes >= startMinutes;
  }

  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
};

export default function Lines() {
  const {
    dateSelected,
    lineSelected,
    setLineSelected,
    setModalIsOpen,
    setIncidentsToDisplay,
  } = useDateSelectorStore();

  const { start, end } = getHoursForSelectedDate(dateSelected);
  const [tramwayLines, setTramwayLines] = useState(tramwayLinesData);
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [numberOfIncidentsForLine, setNumberOfIncidentsForLine] = useState<any>(
    {}
  );
  const [intervals, setIntervals] = useState<Intervals[]>(
    generateTimeIntervals()
  );

  useEffect(() => {
    if (!start || !end) return;
    setIntervals(
      intervals.map((interval) => ({
        ...interval,
        isRunning: isWithinTimeRange(interval.timeString, start, end),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  useEffect(() => {
    if (!incidents) return;
    setIntervals(
      intervals.map((interval) => ({
        ...interval,
        incidents: tramwayLines.reduce(
          (acc: { [key: string]: boolean }, line) => {
            acc[line.numero] =
              incidentsForLineOnInterval(line.numero, interval.timeString)
                .length > 0;
            return acc;
          },
          {}
        ),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incidents]);

  useEffect(() => {
    setNumberOfIncidentsForLine({});
    const fetchIncidents = async () => {
      const response = await getIncidentsAllForDate(dateSelected);
      setIncidents(response);
    };

    fetchIncidents();
  }, [dateSelected]);

  useEffect(() => {
    if (!incidents) return;
    const fetchIncidentsForLine = () => {
      tramwayLines.forEach((line) => {
        setNumberOfIncidentsForLine((prev: any) => ({
          ...prev,
          [line.numero]: incidents?.filter((incident) =>
            incident.tramsImpacted.includes(line.numero)
          ).length,
        }));
      });
    };
    fetchIncidentsForLine();
  }, [incidents, tramwayLines]);

  const incidentsForLineOnInterval = (line: string, interval: string) => {
    if (!incidents) return [];
    return incidents?.filter((incident) => {
      // TODO: fix this
      return (
        incident.tramsImpacted.includes(line) &&
        incident.time.toLocaleTimeString("fr-FR").slice(0, 5) === interval
      );
    });
  };

  const handleIncidentClick = (lineNumber: string, timeString: string) => {
    const result = incidentsForLineOnInterval(lineNumber, timeString);
    if (result.length === 0) return;
    setLineSelected(lineNumber === lineSelected ? "" : lineNumber);
    setIncidentsToDisplay(result);
    setModalIsOpen(true);
  };

  const handleIncidentsClick = (lineNumber: string) => {
    const incidentsList = incidents?.filter((incident) => {
      return incident.tramsImpacted.includes(lineNumber);
    });

    const result = numberOfIncidentsForLine[lineNumber];
    if (result === 0) return;
    if (!incidentsList) return;
    setLineSelected(lineNumber === lineSelected ? "" : lineNumber);
    setIncidentsToDisplay(incidentsList);
    setModalIsOpen(true);
  };

  return (
    <div className={styles.lines}>
      {tramwayLines.map((line, index) => (
        <div className={styles.lineContainer} key={index + "-" + line.numero}>
          <div className={styles.line}>
            <div
              className={styles.lineName}
              onClick={() => handleIncidentsClick(line.numero)}
            >
              <span
                className={styles.numero}
                style={{ backgroundColor: (line as { color: string }).color }}
              >
                {(line as { numero: string }).numero}
              </span>
              {numberOfIncidentsForLine?.[line.numero] > 0 && (
                <span className={styles.badge}>
                  {numberOfIncidentsForLine[line.numero]}
                </span>
              )}
            </div>
            {intervals.map((interval: any, index: number) => (
              <a
                onClick={() =>
                  handleIncidentClick(
                    (line as { numero: string }).numero,
                    interval.timeString
                  )
                }
                key={
                  index +
                  "-" +
                  interval.timeString +
                  "-" +
                  interval.incidents?.[line.numero]
                }
                className={
                  (interval.isRunning
                    ? interval.incidents?.[line.numero]
                      ? "incident"
                      : "ok"
                    : "no") +
                  " " +
                  interval.classes.join(" ")
                }
              ></a>
            ))}
          </div>
          <div className={styles.incidents}></div>
        </div>
      ))}
    </div>
  );
}
