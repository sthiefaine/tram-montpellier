import { Incident } from "@prisma/client";
import styles from "./cards.module.css";

type TimelineProps = {
  incidents: Incident[];
};

const Timeline = ({ incidents }: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      {incidents.map((incident, index: number) => (
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

export default Timeline;
