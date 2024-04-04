"use server";

import { createJsonFile, JsonPagePath } from "@/lib/utils";
import { promises as fs } from "fs";

export async function getContent(page: string, type: "draft" | "prod") {
  const jsonPath = JsonPagePath(page, type);
  const raw = await fs.readFile(jsonPath, "utf8");
  const parsed = JSON.parse(raw);
  return parsed;
}

export async function createPage(page: string) {
  const filePathDraft = JsonPagePath(page, "draft");
  const filePathProd = JsonPagePath(page, "prod");

  const baseContent = { sections: {}, order: [] };
  const jsonStringContent = JSON.stringify(baseContent, null, 2);

  Promise.all([
    createJsonFile(filePathDraft, jsonStringContent),
    createJsonFile(filePathProd, jsonStringContent),
  ]);

  return {
    draft: filePathDraft,
    prod: filePathProd,
  };
}
