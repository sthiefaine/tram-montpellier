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
};

type IncidentLight = {
  time: string;
  incidentType: string;
  incidentDescription: string;
  tramsImpacted: string[];
  impactedStation: string[];
  allDay: boolean;
  incidentEnd: boolean;
  incidentTerminated: boolean;
};

type tramwayLinesIncidentsForDate = {
  [key: string]: {
    [key: string]: IncidentLight;
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
  const { dateSelected, setModalIsOpen, setIncidentsToDisplay } =
    useDateSelectorStore();

  const { start, end } = getHoursForSelectedDate(dateSelected);
  const [tramwayLines, setTramwayLines] = useState(tramwayLinesData);
  const [incidentsForDate, setIncidentsForDate] = useState<
    tramwayLinesIncidentsForDate[]
  >([]);
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
    const filterIncidentsForDate = (incidents: Incident[]) => {
      let filteredIncidents: tramwayLinesIncidentsForDate[] = [];
      incidents.forEach((incident) => {
        const line = tramwayLines.find(
          (line) => line.numero === incident.tramsImpacted[0]
        );
        if (line) {
          const key = incident.time?.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          });
          filteredIncidents = {
            ...filteredIncidents,
            [line.numero]: {
              ...filteredIncidents[Number(line.numero)],
              [key]: {
                time: incident.time,
                incidentType: incident.incidentType,
                incidentDescription: incident.incidentDescription,
                tramsImpacted: incident.tramsImpacted,
                impactedStation: incident.impactedStation,
                estimatedStartTime: incident.estimatedStartTime,
                allDay: incident.allDay,
                incidentEnd: incident.incidentEnd,
                incidentTerminated: incident.incidentTerminated,
              },
            },
          };
        }
      });
      return filteredIncidents;
    };

    const fetchIncidents = async () => {
      const response = await getIncidentsAllForDate(dateSelected);
      setIncidentsForDate(filterIncidentsForDate(response));
    };

    fetchIncidents();
  }, [dateSelected, tramwayLines]);

  const handleIncidentClick = (lineNumber: string, timeString: string) => {
    const result = incidentsForDate?.[Number(lineNumber)]?.[timeString];
    if (!result) return;
    setIncidentsToDisplay([result] as never);
    setModalIsOpen(true);
  };

  const handleIncidentsClick = (lineNumber: string) => {
    const incidentsList = incidentsForDate[Number(lineNumber)];
    if (!incidentsList) return;
    setIncidentsToDisplay([...Object.values(incidentsList)] as never);
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
              {incidentsForDate?.[Number(line.numero)] && (
                <span className={styles.badge}>
                  {Object.keys(incidentsForDate[Number(line.numero)])?.length}
                </span>
              )}
            </div>
            {intervals.map((interval: Intervals, index: number) => {
              const incident =
                incidentsForDate[Number(line.numero)]?.[interval.timeString];
              return (
                <a
                  onClick={() =>
                    handleIncidentClick(
                      (line as { numero: string }).numero,
                      interval.timeString
                    )
                  }
                  key={index + "-" + interval.timeString}
                  className={
                    (interval.isRunning
                      ? incident
                        ? incident.incidentTerminated
                          ? "incident terminated"
                          : "incident"
                        : "ok"
                      : "no") +
                    " " +
                    interval.classes.join(" ")
                  }
                ></a>
              );
            })}
          </div>
          <div className={styles.incidents}></div>
        </div>
      ))}
    </div>
  );
}
