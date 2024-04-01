"use server";

import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";

export async function getContent(page: string) {
  const jsonPath = process.cwd() + "/data/" + page + ".json";
  const raw = await fs.readFile(jsonPath, "utf8");
  const parsed = JSON.parse(raw);
  return parsed;
}

export async function saveContent(formData: FormData) {
  const data = formData.get("data") as string;
  const page = formData.get("page") as string;
  const parsedData = JSON.parse(data);
  const updatedData = JSON.stringify(parsedData);
  const jsonPath = process.cwd() + "/data/" + page + ".json";
  console.log(parsedData);
  await fs.writeFile(jsonPath, updatedData);
  revalidatePath("/editor/" + page);
}

export async function setContent(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const page = formData.get("page") as string;
  const jsonPath = process.cwd() + "/data/" + page + ".json";
  const read = await getContent(page);

  const copyExisting = { ...read };
  const copySections = [...copyExisting.sections];
  const copyContent = { ...copyExisting.content };

  const findExistingSameSection = copySections.filter((i) => i.includes(name));

  const nameWithId = `${name}__${findExistingSameSection.length + 1}`;
  copySections.push(nameWithId);
  copyContent[nameWithId] = {};

  const data = {
    content: copyContent,
    sections: copySections,
  };

  const updatedData = JSON.stringify(data);

  await fs.writeFile(jsonPath, updatedData);
  revalidatePath("/editor/" + page);
}
