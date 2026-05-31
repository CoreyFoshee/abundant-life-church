import { defaultServiceTimes } from "@/lib/data/serviceTimes";
import type { ServiceTimesData } from "@/lib/types/service";
import { isSanityConfigured } from "@/sanity/env";
import { getSanityClient } from "@/sanity/lib/client";
import { serviceTimesQuery } from "@/sanity/lib/queries";

export async function getServiceTimes(): Promise<ServiceTimesData> {
  const client = getSanityClient();

  if (!isSanityConfigured || !client) {
    return defaultServiceTimes;
  }

  try {
    const data = await client.fetch<ServiceTimesData | null>(
      serviceTimesQuery,
      {},
      { next: { tags: ["serviceTimes"], revalidate: 60 } }
    );

    if (data?.services?.length) {
      return {
        intro: data.intro,
        services: data.services,
      };
    }
  } catch {
    // Fall back to defaults if Sanity is unavailable.
  }

  return defaultServiceTimes;
}
