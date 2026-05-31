import { defineArrayMember, defineField, defineType } from "sanity";
import { defaultServiceTimes } from "@/lib/data/serviceTimes";

export const serviceTimesType = defineType({
  name: "serviceTimes",
  title: "Service Times",
  type: "document",
  initialValue: {
    intro: defaultServiceTimes.intro,
    services: defaultServiceTimes.services.map((service) => ({ ...service })),
  },
  fields: [
    defineField({
      name: "intro",
      title: "Intro note (optional)",
      description: "Short line shown above service times on the Visit page.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "services",
      title: "Services",
      description:
        "Pre-filled with Sunday Morning Class and Sunday Worship. Edit times or locations as needed, or add more services.",
      type: "array",
      validation: (rule) => rule.min(1).required(),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Service name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "time",
              title: "Time",
              description: 'Example: "9:00 AM"',
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "location",
              title: "Location",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { name: "name", time: "time", location: "location" },
            prepare({ name, time, location }) {
              return {
                title: name,
                subtitle: `${time} · ${location}`,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Service Times" };
    },
  },
});
