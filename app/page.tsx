"use server";
import DateSelector from "./components/dateSelector/dateSelector";
import Timeline from "./components/timeline/timeline";
import { Header } from "./components/header/header";
import { BigModal } from "./components/modal/bigModal/bigModal";
import { Button } from "./components/Button/Button";


export default async function Page() {
  return (
    <div>
      <Header />
      <DateSelector />
      <Timeline />
      <Button />
      <BigModal />
      
    </div>
  );
}
