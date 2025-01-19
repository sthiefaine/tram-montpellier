"use server";
import DateSelector from "./components/dateSelector/dateSelector";
import Timeline from "./components/timeline/timeline";
import { Header } from "./components/header/header";
import { Mapgl } from "./components/tramMap/mapgl";


export default async function Page() {
  return (
    <div>
      <Header />
      <DateSelector />
      <Timeline />
      <Mapgl />
    </div>
  );
}
