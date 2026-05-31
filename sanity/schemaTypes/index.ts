import type { SchemaTypeDefinition } from "sanity";
import { eventType } from "@/sanity/schemaTypes/event";
import { serviceTimesType } from "@/sanity/schemaTypes/serviceTimes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, serviceTimesType],
};
