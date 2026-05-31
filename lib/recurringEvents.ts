import type { Event, EventRecurrence } from "@/lib/types/event";

type Occurrence = {
  start: Date;
  end: Date;
};

function getWeekdayOccurrenceInMonth(date: Date): number {
  const weekday = date.getDay();
  let count = 0;

  for (let day = 1; day <= date.getDate(); day++) {
    if (new Date(date.getFullYear(), date.getMonth(), day).getDay() === weekday) {
      count++;
    }
  }

  return count;
}

function isLastWeekdayOfMonth(date: Date): boolean {
  const nextWeek = new Date(date);
  nextWeek.setDate(date.getDate() + 7);
  return nextWeek.getMonth() !== date.getMonth();
}

function getMonthlyOccurrenceDate(
  anchor: Date,
  year: number,
  month: number
): Date | null {
  const weekday = anchor.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matchingDays: Date[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const candidate = new Date(year, month, day);
    if (candidate.getDay() === weekday) {
      matchingDays.push(candidate);
    }
  }

  if (matchingDays.length === 0) {
    return null;
  }

  const target = isLastWeekdayOfMonth(anchor)
    ? matchingDays[matchingDays.length - 1]
    : matchingDays[getWeekdayOccurrenceInMonth(anchor) - 1];

  return target ?? null;
}

function applyAnchorTimes(
  occurrenceDay: Date,
  anchorStart: Date,
  anchorEnd: Date
): Occurrence {
  const start = new Date(occurrenceDay);
  start.setHours(
    anchorStart.getHours(),
    anchorStart.getMinutes(),
    anchorStart.getSeconds(),
    anchorStart.getMilliseconds()
  );

  const durationMs = anchorEnd.getTime() - anchorStart.getTime();
  const end = new Date(start.getTime() + durationMs);

  return { start, end };
}

function getNextWeeklyOccurrence(
  anchorStart: Date,
  anchorEnd: Date,
  seriesEnd: Date,
  after: Date
): Occurrence | null {
  const occurrence = new Date(anchorStart);

  while (occurrence <= after) {
    occurrence.setDate(occurrence.getDate() + 7);
  }

  if (occurrence > seriesEnd) {
    return null;
  }

  return applyAnchorTimes(occurrence, anchorStart, anchorEnd);
}

function getNextMonthlyOccurrence(
  anchorStart: Date,
  anchorEnd: Date,
  seriesEnd: Date,
  after: Date
): Occurrence | null {
  let year = after.getFullYear();
  let month = after.getMonth();

  for (let attempt = 0; attempt < 24; attempt++) {
    const day = getMonthlyOccurrenceDate(anchorStart, year, month);

    if (day) {
      const { start, end } = applyAnchorTimes(day, anchorStart, anchorEnd);

      if (start > after && start <= seriesEnd) {
        return { start, end };
      }
    }

    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  return null;
}

export function getNextOccurrence(
  event: Pick<Event, "date" | "endDate" | "recurrence" | "recurrenceEnd">,
  after: Date = new Date()
): Occurrence | null {
  const recurrence = event.recurrence ?? "none";
  const anchorStart = new Date(event.date);
  const anchorEnd = new Date(event.endDate);

  if (recurrence === "none") {
    if (anchorEnd < after) {
      return null;
    }

    return { start: anchorStart, end: anchorEnd };
  }

  if (!event.recurrenceEnd) {
    return null;
  }

  const seriesEnd = new Date(event.recurrenceEnd);

  if (seriesEnd < after) {
    return null;
  }

  if (recurrence === "weekly") {
    const next =
      anchorEnd >= after
        ? { start: anchorStart, end: anchorEnd }
        : getNextWeeklyOccurrence(anchorStart, anchorEnd, seriesEnd, after);

    if (!next || next.start > seriesEnd) {
      return null;
    }

    return next;
  }

  if (recurrence === "monthly") {
    const next =
      anchorEnd >= after
        ? { start: anchorStart, end: anchorEnd }
        : getNextMonthlyOccurrence(anchorStart, anchorEnd, seriesEnd, after);

    if (!next || next.start > seriesEnd) {
      return null;
    }

    return next;
  }

  return null;
}

export function formatRecurrenceLabel(
  recurrence: EventRecurrence | undefined,
  anchorDate: string
): string | null {
  if (!recurrence || recurrence === "none") {
    return null;
  }

  const anchor = new Date(anchorDate);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    anchor
  );

  if (recurrence === "weekly") {
    return `Every ${weekday}`;
  }

  if (isLastWeekdayOfMonth(anchor)) {
    return `Last ${weekday} of each month`;
  }

  const ordinals = ["", "First", "Second", "Third", "Fourth", "Fifth"];
  const occurrence = getWeekdayOccurrenceInMonth(anchor);

  return `${ordinals[occurrence] ?? "Last"} ${weekday} of each month`;
}

export function resolveUpcomingEvents(events: Event[], now = new Date()): Event[] {
  const resolved: Event[] = [];

  for (const event of events) {
    const anchorDate = event.date;
    const next = getNextOccurrence(event, now);

    if (!next) {
      continue;
    }

    resolved.push({
      ...event,
      date: next.start.toISOString(),
      endDate: next.end.toISOString(),
      recurrenceLabel:
        event.recurrence && event.recurrence !== "none"
          ? formatRecurrenceLabel(event.recurrence, anchorDate) ?? undefined
          : undefined,
    });
  }

  return resolved.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
