import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { promises as fs } from "fs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
