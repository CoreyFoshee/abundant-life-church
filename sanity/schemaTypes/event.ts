import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event title",
      description: 'Example: "Community Outreach Day" or "Youth Night"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      description: "Auto-generated from the title. Usually no need to change this.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "recurrence",
      title: "Repeats",
      description:
        "Choose whether this is a one-time event or repeats weekly / monthly on the same day of the week.",
      type: "string",
      options: {
        list: [
          { title: "One time only", value: "none" },
          { title: "Every week (same day)", value: "weekly" },
          { title: "Every month (same day of week)", value: "monthly" },
        ],
        layout: "radio",
      },
      initialValue: "none",
    }),
    defineField({
      name: "date",
      title: "Start date & time",
      description:
        "When the event begins. For repeating events, this is the first occurrence and sets the day of the week.",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date & time",
      description:
        "One-time events: when the event ends. Repeating events: end time for each occurrence (usually the same day as the start).",
      type: "datetime",
      validation: (rule) =>
        rule
          .required()
          .custom((endDate, context) => {
            const document = context.document as {
              date?: string;
              recurrence?: string;
            };
            const startDate = document?.date;
            if (!endDate || !startDate) {
              return true;
            }

            if (new Date(endDate) < new Date(startDate)) {
              return "End must be on or after the start.";
            }

            const recurrence = document?.recurrence ?? "none";
            if (recurrence !== "none") {
              const start = new Date(startDate);
              const end = new Date(endDate);
              const sameDay =
                start.getFullYear() === end.getFullYear() &&
                start.getMonth() === end.getMonth() &&
                start.getDate() === end.getDate();

              if (!sameDay) {
                return "For repeating events, start and end should be on the same day (e.g. 7:00 PM – 9:00 PM).";
              }
            }

            return true;
          }),
    }),
    defineField({
      name: "recurrenceEnd",
      title: "Series ends on",
      description:
        "The last date this repeating event should appear on the website.",
      type: "datetime",
      hidden: ({ document }) => (document?.recurrence ?? "none") === "none",
      validation: (rule) =>
        rule.custom((recurrenceEnd, context) => {
          const document = context.document as {
            date?: string;
            recurrence?: string;
          };
          const recurrence = document?.recurrence ?? "none";

          if (recurrence === "none") {
            return true;
          }

          if (!recurrenceEnd) {
            return "Required for repeating events.";
          }

          const startDate = document?.date;
          if (startDate && new Date(recurrenceEnd) < new Date(startDate)) {
            return "Series end must be on or after the first occurrence.";
          }

          return true;
        }),
    }),
    defineField({
      name: "location",
      title: "Location",
      description: 'Example: "Main Sanctuary" or "Church Campus"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "A short paragraph about the event. Shown on the event card.",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "externalLink",
      title: "External link (optional)",
      description: "Link to sign up, RSVP, or learn more (opens in a new tab).",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image (optional)",
      description: "Photo or graphic for the event card. Leave blank for a default icon.",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Date, upcoming first",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      endDate: "endDate",
      recurrence: "recurrence",
      recurrenceEnd: "recurrenceEnd",
    },
    prepare({ title, date, endDate, recurrence, recurrenceEnd }) {
      const formatted = date
        ? new Date(date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "No start date";

      const recurrenceLabel =
        recurrence === "weekly"
          ? "Weekly"
          : recurrence === "monthly"
            ? "Monthly"
            : null;

      const ends =
        recurrence !== "none" && recurrenceEnd
          ? `series ends ${new Date(recurrenceEnd).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`
          : endDate
            ? `off site after ${new Date(endDate).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}`
            : "";

      return {
        title,
        subtitle: [recurrenceLabel, formatted, ends].filter(Boolean).join(" · "),
      };
    },
  },
});
