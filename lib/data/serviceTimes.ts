import type { ServiceTimesData } from "@/lib/types/service";

export const defaultServiceTimes: ServiceTimesData = {
  intro:
    "Every Sunday we gather to worship, pray, and grow together in God's Word.",
  services: [
    {
      name: "Sunday Morning Class",
      time: "9:00 AM",
      location: "180 Center Sanctuary",
    },
    {
      name: "Sunday Worship",
      time: "10:00 AM",
      location: "Main Sanctuary",
    },
  ],
};
