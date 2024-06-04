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
import { useShallow } from "zustand/react/shallow";

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
  const {
    dateSelected,
    lineSelected,
    setLineSelected,
    setModalIsOpen,
    modalIsOpen,
    incidentsToDisplay,
    setIncidentToDisplay,
  } = useDateSelectorStore(
    useShallow((state) => ({
      dateSelected: state.dateSelected,
      lineSelected: state.lineSelected,
      setLineSelected: state.setLineSelected,
      setModalIsOpen: state.setModalIsOpen,
      modalIsOpen: state.modalIsOpen,
      incidentsToDisplay: state.incidentsToDisplay,
      setIncidentToDisplay: state.setIncidentsToDisplay,
    }))
  );
  const intervals = generateTimeIntervals();
  const { start, end } = getHoursForSelectedDate(dateSelected);
  const [tramwayLines, setTramwayLines] = useState(tramwayLinesData);
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [numberOfIncidentsForLine, setNumberOfIncidentsForLine] = useState<any>(
    {}
  );

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await getIncidentsAllForDate(dateSelected);
      setIncidents(response);
    };

    fetchIncidents();
  }, [dateSelected]);

  useEffect(() => {
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
  }, [incidents]);

  const incidentsForLineOnInterval = (line: string, interval: string) => {
    if (!incidents) return [];
    return incidents?.filter((incident) => {
      return (
        incident.tramsImpacted.includes(line) &&
        incident.time
          .toLocaleTimeString("fr-FR", { timeZone: "UTC" })
          .slice(0, 5) === interval
      );
    });
  };

  const handleIncidentClick = (lineNumber: string, timeString: string) => {
    const result = incidentsForLineOnInterval(lineNumber, timeString);
    if (result.length === 0) return;
    setModalIsOpen(true);
    setLineSelected(lineNumber === lineSelected ? "" : lineNumber);
    setIncidentToDisplay(result);
  };

  const handleIncidentsClick = (lineNumber: string) => {
    const incidentsList = incidents?.filter((incident) => {
      return incident.tramsImpacted.includes(lineNumber);
    });

    const result = numberOfIncidentsForLine[lineNumber];

    if (!result) return;
    if (result === 0) return;
    if (!incidentsList) return;
    setModalIsOpen(true);
    setLineSelected(lineNumber === lineSelected ? "" : lineNumber);
    setIncidentToDisplay(incidentsList);
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
            {intervals.map((interval, index) => (
              <a
                onClick={() =>
                  handleIncidentClick(
                    (line as { numero: string }).numero,
                    interval.timeString
                  )
                }
                key={index + "-" + interval.timeString}
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
          <div className={styles.incidents}></div>
        </div>
      ))}
    </div>
  );
}
