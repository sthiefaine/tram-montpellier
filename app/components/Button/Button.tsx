"use client";
import { useDateSelectorStore } from "@/store/dateSelector";
import { useShallow } from "zustand/react/shallow";

export type ButtonProps = {
  text?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { setMapIsOpen, mapIsOpen } =
  useDateSelectorStore(
    useShallow((state) => ({
      mapIsOpen: state.mapIsOpen,
      setMapIsOpen: state.setMapIsOpen,
    }))
  );

  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          setMapIsOpen(!mapIsOpen);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Afficher la carte 🗺️
      </button>
    </div>
  );

}