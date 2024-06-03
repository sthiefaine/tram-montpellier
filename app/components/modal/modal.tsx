import { useDateSelectorStore } from "@/store/dateSelector";
import styles from "./modal.module.css";

type ModalProps = {
  test: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

export default function Modal({ test, children }: ModalProps) {
  const { incidentsToDisplay, setModalIsOpen } = useDateSelectorStore(
    (state) => state
  );
  return (
    <div ref={test} className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => setModalIsOpen(false)}>
          &times;
        </span>
        <p>
          {incidentsToDisplay[0]?.time.toLocaleTimeString("fr-FR", {
            timeZone: "UTC",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>{incidentsToDisplay[0]?.incidentDescription}</p>
      </div>
    </div>
  );
}
