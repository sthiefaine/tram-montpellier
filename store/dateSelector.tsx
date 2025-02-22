"use client";
import { Incident } from "@prisma/client";
import { create } from "zustand";

export type DateSelectorState = {
  dateSelected: Date;
  modalIsOpen: boolean;
  mapIsOpen: boolean;
  lineSelected: string;
  incidentsToDisplay: Partial<Incident[]>;
};

export type DateSelectorActions = {
  setDateSelected: (date: Date) => void;
  setModalIsOpen: (isOpen: boolean) => void;
  setMapIsOpen: (isOpen: boolean) => void;
  setLineSelected: (line: string) => void;
  setIncidentsToDisplay: (incidents: Partial<Incident[]>) => void;
};

export type DateSelectorStore = DateSelectorState & DateSelectorActions;

export const defaultInitState: DateSelectorStore = {
  dateSelected: new Date(),
  setDateSelected: () => {},
  modalIsOpen: false,
  setModalIsOpen: () => {},
  mapIsOpen: false,
  setMapIsOpen: () => {},
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
  setIncidentsToDisplay: (incidents: Partial<Incident[]>) =>
    set({ incidentsToDisplay: incidents }),
  setMapIsOpen: (isOpen: boolean) => set({ mapIsOpen: isOpen }),
}));
