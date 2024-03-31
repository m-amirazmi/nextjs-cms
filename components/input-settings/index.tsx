import { SectionSchemaSetting } from "@/lib/types";

export default function InputSettings(settings: SectionSchemaSetting[]) {
  return settings.map((i) => {
    console.log(i);
    return null;
  });
}
