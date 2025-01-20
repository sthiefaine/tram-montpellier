"use client";
import { useDateSelectorStore } from "@/store/dateSelector";
import styles from "./modal.module.css";
import { CircleX } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

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

    const [step, setStep] = useState(0);
    const maxStep = incidentsToDisplay.length - 1;

  if (!modalIsOpen) {
    return <></>;
  }


  const handleStep = (step: number) => {
    const minStep = 0;
    if (step > maxStep) return;
    if (step < minStep) return;
    setStep(step);
  };

  return (
    <div ref={modalRef} className={incidentsToDisplay.length === 1 ? `${styles.modal}` : `${styles.modal} + ${styles.modal_with_button}`}>
      {incidentsToDisplay.length > 1 && (
      
        <>
          <div className={styles.modalHeader}>
            <p className={styles.time}>
              {incidentsToDisplay[step]?.time.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <span
              className={styles.close}
              onClick={() => setModalIsOpen(false)}
            >
              <CircleX />
            </span>
          </div>
          <div className={styles.modalContent}>
            <p>{incidentsToDisplay[step]?.incidentDescription}</p>
            <div className={styles.modalButtons}>
              <button
                className={step === 0 ? styles.modalButton_disabled : styles.modalButton}
                onClick={() => {
                  handleStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                className={step === maxStep ? styles.modalButton_disabled : styles.modalButton}
                onClick={() => {
                  handleStep(step + 1);
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </>
      )}
      {incidentsToDisplay.length === 1 && (
        <>
          <div className={styles.modalHeader}>
            <p className={styles.time}>
              {incidentsToDisplay[0]?.time.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <span
              className={styles.close}
              onClick={() => setModalIsOpen(false)}
            >
              <CircleX />
            </span>
          </div>
          <div className={styles.modalContent}>
            <p>{incidentsToDisplay[0]?.incidentDescription}</p>
          </div>
        </>
      )}
    </div>
  );
}
