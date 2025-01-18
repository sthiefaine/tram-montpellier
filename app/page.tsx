/* eslint-disable react/no-unescaped-entities */
"use server";
import DateSelector from "./components/dateSelector/dateSelector";
import Timeline from "./components/timeline/timeline";
import { Header } from "./components/header/header";
import { TramMap } from "./components/tramMap/tramMap";


export default async function Page() {
  return (
    <div>
      <Header />
      <DateSelector />
      <Timeline />
      <TramMap />
    </div>
  );
}
