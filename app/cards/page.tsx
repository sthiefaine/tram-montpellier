/* eslint-disable react/no-unescaped-entities */
"use server";

import DateSelector from "../components/dateSelector/dateSelector";
import { Header } from "../components/header/header";
import SectionCards from "../components/sectionCards/sectionCards";

export default async function Cards() {
  return (
    <div>
      <Header />
      <DateSelector />

      {<SectionCards />}
    </div>
  );
}
