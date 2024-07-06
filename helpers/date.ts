import {
  fromZonedTime,
  getTimezoneOffset,
  toDate,
  toZonedTime,
} from "date-fns-tz";

export function toTimeZone(date: Date | string | number): Date {
  const timeZone = "Europe/Paris";
  const dateWithTimeZone = toZonedTime(date, timeZone);
  return dateWithTimeZone;
}

export function toGMT(date: Date | string | number): Date {
  console.log("toGMT", date);
  const timeZone = "Europe/Paris";

  const localDate = toDate(date);
  console.log("tolocalDate", date);

  const dateInParisZone = fromZonedTime(localDate, timeZone);
  console.log("dateInParisZone", date);
  const offsetInMinutes = getTimezoneOffset(timeZone, dateInParisZone);
  console.log("offsetInMinutes", date);
  const gmtTimestamp = dateInParisZone.getTime() - offsetInMinutes * 60 * 1000;
  const gmtDate = new Date(gmtTimestamp);
  console.log("gmtDate", date);
  console.log("END");
  return gmtDate;
}
