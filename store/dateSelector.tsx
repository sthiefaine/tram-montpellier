"use client";
import { Incident } from "@prisma/client";
import { create } from "zustand";

export type DateSelectorState = {
  dateSelected: Date;
  modalIsOpen: boolean;
  lineSelected: string;
  incidentsToDisplay: Incident[];
};

export type DateSelectorActions = {
  setDateSelected: (date: Date) => void;
  setModalIsOpen: (isOpen: boolean) => void;
  setLineSelected: (line: string) => void;
  setIncidentsToDisplay: (incidents: Incident[]) => void;
};

export type DateSelectorStore = DateSelectorState & DateSelectorActions;

export const defaultInitState: DateSelectorStore = {
  dateSelected: new Date(),
  setDateSelected: () => {},
  modalIsOpen: false,
  setModalIsOpen: () => {},
  lineSelected: "",
  setLineSelected: () => {},
  incidentsToDisplay: [],
  setIncidentsToDisplay: () => {},
};

export const useDateSelectorStore = create<DateSelectorStore>((set) => ({
  ...defaultInitState,
  setDateSelected: (date: Date) => set({ dateSelected: date }),
  setModalIsOpen: (isOpen: boolean) => set({ modalIsOpen: isOpen }),
  setLineSelected: (line: string) => set({ lineSelected: line }),
  setIncidentsToDisplay: (incidents: Incident[]) =>
    set({ incidentsToDisplay: incidents }),
}));
