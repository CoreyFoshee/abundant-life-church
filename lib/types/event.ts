export type EventRecurrence = "none" | "weekly" | "monthly";

export type Event = {
  id: string;
  title: string;
  slug: string;
  date: string;
  endDate: string;
  recurrence?: EventRecurrence;
  recurrenceEnd?: string;
  recurrenceLabel?: string;
  location: string;
  description: string;
  image?: string;
  externalLink?: string;
};
