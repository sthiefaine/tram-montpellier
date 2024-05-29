"use client";
import { create } from "zustand";

export type DateSelectorState = {
  dateSelected: Date;
};

export type DateSelectorActions = {
  setDateSelected: (date: Date) => void;
};

export type DateSelectorStore = DateSelectorState & DateSelectorActions;

export const defaultInitState: DateSelectorStore = {
  dateSelected: new Date(),
  setDateSelected: () => {},
};

export const useDateSelectorStore = create<DateSelectorStore>((set) => ({
  ...defaultInitState,
  setDateSelected: (date: Date) => set({ dateSelected: date }),
}));
