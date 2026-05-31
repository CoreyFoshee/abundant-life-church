import type { StructureResolver } from "sanity/structure";

const SERVICE_TIMES_ID = "serviceTimes";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Service Times")
        .id(SERVICE_TIMES_ID)
        .child(
          S.document()
            .schemaType("serviceTimes")
            .documentId(SERVICE_TIMES_ID)
            .title("Service Times")
        ),
      S.divider(),
      S.documentTypeListItem("event").title("Upcoming Events"),
    ]);
