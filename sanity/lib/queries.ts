import { groq } from "next-sanity";

export const upcomingEventsQuery = groq`
  *[_type == "event" && (
    (!defined(recurrence) || recurrence == "none") && endDate >= now()
    || recurrence in ["weekly", "monthly"] && recurrenceEnd >= now()
  )] | order(date asc) {
    "id": _id,
    title,
    "slug": slug.current,
    date,
    endDate,
    recurrence,
    recurrenceEnd,
    location,
    description,
    externalLink,
    "image": image.asset->url
  }
`;

export const serviceTimesQuery = groq`
  *[_type == "serviceTimes" && _id == "serviceTimes"][0] {
    intro,
    services[] {
      name,
      time,
      location
    }
  }
`;
