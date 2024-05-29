"use client";
import { Incident } from "@prisma/client";
import styles from "./cards.module.css";
import {
  getIncidents,
  getIncidentsForDate,
} from "@/app/actions/incidents/incidents.actions";
import { useEffect, useState } from "react";

type CardProps = {
  date: Date;
  terminated?: boolean;
};

const Card = ({ date, terminated = false }: CardProps) => {
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      const incidents = await getIncidentsForDate(date, terminated);
      const filteredIncidents = incidents.filter(
        (incident: any) =>
          incident.tramsImpacted.includes("1") ||
          incident.tramsImpacted.includes("2") ||
          incident.tramsImpacted.includes("3") ||
          incident.tramsImpacted.includes("4") ||
          incident.tramsImpacted.includes("5")
      );
      setFilteredIncidents(filteredIncidents);
    };

    fetchIncidents();
  }, [date, terminated]);

  return (
    <div className={styles.card}>
      {filteredIncidents.map((incident: any, index: number) => (
        <div key={index} className={styles.incident}>
          <div className={styles.time}>
            {new Date(incident.time).toLocaleString()}
          </div>
          <div className={styles.content}>
            <h3>{incident.incidentType}</h3>
            <p>{incident.incidentDescription}</p>
            <p>
              <strong>Lignes impactées:</strong>{" "}
              {incident.tramsImpacted.join(", ")}
            </p>
            <p>
              <strong>Stations impactées:</strong>{" "}
              {incident.impactedStation.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
