/**
 * @module DateTime
 * @description
 * This module exports the function {@link formatDateRange}, which formats a
 * starting and ending date-time into a human-readable string. See the
 * documentation of that function for more information.
 */



/** Creates a date-only string for given `Date` object. @param {Date} dt */
function getDateString(dt) {
  return dt.toLocaleString("en-ae", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short"
  });
}

/** Creates a time-only string for given `Date` object. @param {Date} dt */
function getTimeString(dt) {
  return dt.toLocaleTimeString("en-in", {timeStyle: "short"});
}

/** Checks if a given date is on the boundary of a day.
 * A date is considered to be on the boundary if it's either 00:00 or 23:59.
 * @param {Date} dt The date object to check.
 */
function isOnDayBoundary(dt) {
  const h = dt.getHours(), m = dt.getMinutes();
  return (h == 0 && m == 0) || (h == 23 && m == 59);
}

/** Formats the given `Date` object into a string, considering whether the time
 * is on the day boundary. If it is on the day boundary, the time is NOT
 * included in the result.
 * @param {Date} dt
 * @see {@link isOnDayBoundary}
 */
function formatDateTime(dt) {
  return getDateString(dt) + (
    isOnDayBoundary(dt)
    ? ""
    : `, ${getTimeString(dt)}`
  );
}

/** Formats the given start and end date-time into a human-readable string. It
 * handles if either start or end date-times are unknown (i.e. `null`). It
 * handles same as well as different start & end dates. In the case that the
 * start & end dates are the same, it also handles if either/both the start and
 * end times are unknown.
 *
 * In short, you can throw any two date-time objects at it, and it'll return a
 * nicely formatted, human-readable string.
 *
 * Note:
 * - Give 12:00 AM as the start time to indicate an unknown start time.
 * - Give 11:59 PM as the end time to indicate an unknown end time.
 * @param {Date | null} dtStart the start date-time
 * @param {Date | null} dtEnd the end date-time
 */
export function formatDateRange(dtStart, dtEnd) {
  if (dtStart == null && dtEnd == null) {return "";}
  if (dtEnd == null) {return formatDateTime(dtStart) + " onwards";}
  if (dtStart == null) {return "till " + formatDateTime(dtEnd);}
  if (dtStart == dtEnd) {return formatDateTime(dtStart)};
  [dtStart, dtEnd] = [dtStart, dtEnd].sort((a, b) => a.getTime() - b.getTime());

  // whether the date is on the very start (or) very end of the day.
  const dtStartDB = isOnDayBoundary(dtStart), dtEndDB = isOnDayBoundary(dtEnd);

  // lmao i cba to compare the actual getDate, getMonth, getFullYear so i just
  // compared the date strings... technically it should work 🤷‍♂️
  const isSameDay = dtStart.toDateString() == dtEnd.toDateString();

  if (isSameDay) {

    // choose depending on which of the dates is on the day boundary.
    if (dtStartDB && dtEndDB) // e.g. 12:00 AM till 11:59 PM
      return getDateString(dtStart);

    else if (dtStartDB && !dtEndDB) // e.g. 12:00 AM till 6:00 PM
      return formatDateTime(dtStart) + ", ends at " + getTimeString(dtEnd);

    else if (!dtStartDB && dtEndDB) // e.g. 3:00 PM till 11:59 PM
      return formatDateTime(dtEnd) + ", starting at " + getTimeString(dtStart);

    else // e.g. 3:00 PM till 6:00 PM
      return formatDateTime(dtStart) + " — " + getTimeString(dtEnd);

  } else {
    return formatDateTime(dtStart) + " — " + formatDateTime(dtEnd);
  }
}
