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
  const timeZone = "Europe/Paris";
  const localDate = toDate(date);
  const dateInParisZone = fromZonedTime(localDate, timeZone);
  const offsetInMinutes = getTimezoneOffset(timeZone, dateInParisZone);
  const gmtTimestamp = dateInParisZone.getTime() - offsetInMinutes * 60 * 1000;
  const gmtDate = new Date(gmtTimestamp);
  return gmtDate;
}
