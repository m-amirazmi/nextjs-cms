"use server";

import { Content } from "@/types/store.types";
import { promises as fs } from "fs";

export async function getContent(page: string, type: "draft" | "prod") {
  const jsonPath = await JsonPagePath(page, type);
  const raw = await fs.readFile(jsonPath, "utf8");
  const parsed: Content = JSON.parse(raw);
  return parsed;
}

export async function createPage(page: string) {
  const filePathDraft = await JsonPagePath(page, "draft");
  const filePathProd = await JsonPagePath(page, "prod");

  const baseContent = {
    sections: {},
    order: [],
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
  };
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

export const createJsonFile = async (filePath: string, jsonData: string) => {
  try {
    try {
      await fs.access(filePath);
      console.log(
        "JSON file already exists. No need to create a new one.",
        "PAGE =>",
        filePath
      );
    } catch (error) {
      await fs.writeFile(filePath, jsonData);
      console.log(
        "JSON file has been created successfully!",
        "PAGE =>",
        filePath
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const JsonPagePath = (page: string, type: "draft" | "prod") => {
  return process.cwd() + "/data/" + page + "." + type + ".json";
};
