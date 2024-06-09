"use client";
import { useDateSelectorStore } from "@/store/dateSelector";
import styles from "./modal.module.css";
import { CircleX } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

type ModalProps = {
  modalRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

export default function Modal({ modalRef, children }: ModalProps) {
  const { incidentsToDisplay, setModalIsOpen, modalIsOpen } =
    useDateSelectorStore(
      useShallow((state) => ({
        incidentsToDisplay: state.incidentsToDisplay,
        setModalIsOpen: state.setModalIsOpen,
        modalIsOpen: state.modalIsOpen,
      }))
    );

  if (!modalIsOpen) {
    return null;
  }

  return (
    <div ref={modalRef} className={`${styles.modal}`}>
      <div className={styles.modalHeader}>
        <p className={styles.time}>
          {incidentsToDisplay[0]?.time.toLocaleTimeString("fr-FR", {
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
