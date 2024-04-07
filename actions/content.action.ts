"use server";

import { GeneralContent } from "@/types/editor-page.types";
import { Content } from "@/types/store.types";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

export async function getContent(page: string, type: "draft" | "publish") {
  const jsonPath = await JsonPagePath(page, type);
  const raw = await fs.readFile(jsonPath, "utf8");
  const parsed: Content = JSON.parse(raw);
  return parsed;
}

export async function getGeneralContent(
  property: string,
  type: "draft" | "publish"
) {
  const jsonPath = await JsonPagePath("/general", type);
  const raw = await fs.readFile(jsonPath, "utf8");
  const parsed: GeneralContent = JSON.parse(raw);
  return parsed[property];
}

export async function createPage({
  pagename,
  pagetitle,
  pagepath,
  redirectUrl,
}: {
  pagename: string;
  pagetitle: string;
  pagepath: string;
  redirectUrl?: string;
}) {
  const filePathDraft = await JsonPagePath(pagename, "draft");
  const filePathProd = await JsonPagePath(pagename, "publish");

  const baseContent = {
    path: pagepath,
    title: pagetitle,
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

  // Todo: Read, update and save pages list in general json

  if (redirectUrl) redirect(redirectUrl);

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

export const JsonPagePath = (page: string, type: "draft" | "publish") => {
  return process.cwd() + "/data/" + page + "." + type + ".json";
};
