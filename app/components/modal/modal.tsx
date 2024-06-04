import { useDateSelectorStore } from "@/store/dateSelector";
import styles from "./modal.module.css";
import { CircleX } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

type ModalProps = {
  modalRef: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

export default function Modal({ modalRef, children }: ModalProps) {
  const { incidentsToDisplay, setModalIsOpen } = useDateSelectorStore(
    useShallow((state) => ({
      incidentsToDisplay: state.incidentsToDisplay,
      setModalIsOpen: state.setModalIsOpen,
    }))
  );

  return (
    <div ref={modalRef} className={styles.modal}>
      <div className={styles.modalHeader}>
        <p className={styles.time}>
          {incidentsToDisplay[0]?.time.toLocaleTimeString("fr-FR", {
            timeZone: "UTC",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <span className={styles.close} onClick={() => setModalIsOpen(false)}>
          <CircleX />
        </span>
      </div>
      <div className={styles.modalContent}>
        <p>{incidentsToDisplay[0]?.incidentDescription}</p>
      </div>
    </div>
  );
}
