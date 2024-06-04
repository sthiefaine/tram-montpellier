"use client";
import { useEffect, useRef, useState } from "react";
import Lines from "../lines/lines";
import styles from "./timeline.module.css";
import { useDateSelectorStore } from "@/store/dateSelector";
import Modal from "../modal/modal";
import { useShallow } from "zustand/react/shallow";

const generateHours = () => {
  const hours = [];
  for (let i = 4; i < 24 + 4; i++) {
    const hour = i % 24;
    const hourString = hour.toString().padStart(2, "0") + "h";
    hours.push(hourString);
  }
  return hours;
};

export default function Timeline() {
  const date = new Date();
  const hours = generateHours();
  const { dateSelected, modalIsOpen, setModalIsOpen } = useDateSelectorStore(
    useShallow((state) => ({
      dateSelected: state.dateSelected,
      modalIsOpen: state.modalIsOpen,
      setModalIsOpen: state.setModalIsOpen,
    }))
  );
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const isToday = dateSelected.toDateString() === new Date().toDateString();
  const targetHour = date.getHours();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isToday) return;
    const scrollContainer = scrollContainerRef.current;
    if (isToday && scrollContainer?.scrollLeft !== 0) return;
    const scrollAmount = targetHour;

    const scrollHorizontally = () => {
      scrollContainer?.scrollBy({
        left: scrollAmount * 30,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(() => {
      scrollHorizontally();
      clearInterval(intervalId);
    }, 1000);
  }, [isToday, targetHour]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section ref={scrollContainerRef} className={styles.section}>
        <div className={styles.timeBar}>
          {hours.map((hour, index) => (
            <span key={index} className={styles.timeSpan}>
              {hour}
            </span>
          ))}
        </div>
        <Lines />
        {modalIsOpen && <Modal modalRef={modalRef} />}
      </section>
    </>
  );
}
