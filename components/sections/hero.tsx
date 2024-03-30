import { HeroProps, SectionSchema } from "@/lib/types";

export default function Hero({ title = "Default Hero" }: HeroProps) {
  return <div>{title}</div>;
}

export const heroSchema: SectionSchema = {
  name: "hero",
  settings: [
    {
      id: "hero-title",
      label: "Hero Title",
      type: "radio",
      options: [{ label: "sd", value: 232 }],
    },
  ],
};
