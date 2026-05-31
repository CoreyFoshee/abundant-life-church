import { NextResponse } from "next/server";

const BIBLE_GATEWAY_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "*/*",
};

function extractCdata(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`)
  );
  return match?.[1]?.trim() ?? "";
}

export async function GET() {
  try {
    const response = await fetch(
      "https://www.biblegateway.com/votd/get/?format=xml&version=NKJV",
      {
        headers: BIBLE_GATEWAY_HEADERS,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Bible Gateway request failed");
    }

    const xml = await response.text();

    if (!xml.includes("<votd>")) {
      throw new Error("Unexpected Bible Gateway response");
    }

    const text = extractCdata(xml, "text");
    const reference =
      extractCdata(xml, "display_ref") || extractCdata(xml, "reference");
    const version_id = extractCdata(xml, "version_id");
    const permalink = extractCdata(xml, "permalink");

    if (!text || !reference) {
      throw new Error("Missing verse data");
    }

    return NextResponse.json({
      text,
      reference,
      version_id: version_id || "NKJV",
      permalink,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to load verse of the day" },
      { status: 502 }
    );
  }
}
