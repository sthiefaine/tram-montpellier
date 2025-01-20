"use client";
import { useDateSelectorStore } from "@/store/dateSelector";
import { Mapgl } from "../../tramMap/mapgl";
import { useShallow } from "zustand/react/shallow";

export const BigModal = () => {
  const { mapIsOpen, setMapIsOpen } = useDateSelectorStore(
    useShallow((state) => ({
      mapIsOpen: state.mapIsOpen,
      setMapIsOpen: state.setMapIsOpen,
    }))
  );
  if (!mapIsOpen) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {" "}
      <div className="relative bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
        <header className="flex justify-between items-center">
          <h3 className="text-lg font-medium">
            <span className="text-gray-900">
              Carte du tramway de Montpellier
            </span>
          </h3>
        </header>

        <div className="flex justify-between items-center flex-col">
            <Mapgl />

          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setMapIsOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
