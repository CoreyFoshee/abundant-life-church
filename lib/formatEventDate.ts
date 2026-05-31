type FormatEventDateOptions = {
  start: string;
  end: string;
};

export function formatEventDateRange({ start, end }: FormatEventDateOptions): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameDay =
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDate() === endDate.getDate();

  if (sameDay) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(startDate);
  }

  const sameMonth =
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth();

  if (sameMonth) {
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      startDate
    );
    return `${month} ${startDate.getDate()}–${endDate.getDate()}`;
  }

  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const startFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  };
  const endFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const startLabel = new Intl.DateTimeFormat("en-US", startFormat).format(
    startDate
  );
  const endLabel = new Intl.DateTimeFormat("en-US", endFormat).format(endDate);

  return `${startLabel} – ${endLabel}`;
}

export function formatEventDateTimeAttribute(start: string, end: string): string {
  return `${start}/${end}`;
}
