"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "abundant-life-church",
  title: "Abundant Life Church",
  projectId,
  dataset,
  basePath: "/studio",
  apiVersion,
  plugins: [structureTool({ structure })],
  schema,
});
