import { HeroProps, SectionSchema } from "@/lib/types";

export default function Hero({
  title,
  subtitle,
  subtitle_heading,
  description,
  text_alignment,
}: HeroProps) {
  return (
    <div className="flex flex-col gap-4" style={{ textAlign: text_alignment }}>
      <div>Title: {title}</div>
      <div>Subtitle: {subtitle}</div>
      <div>Subtitle Heading: {subtitle_heading}</div>
      <div>Description: {description}</div>
    </div>
  );
}

export const heroSchema: SectionSchema = {
  name: "hero",
  settings: [
    {
      id: "title",
      label: "Hero title",
      type: "text",
      default: "Custom NextJS CMS",
      placeholder: "Enter the hero title text",
      smallnote: "The title text will be appeared as H1 heading",
    },
    {
      id: "subtitle",
      label: "Hero subtitle",
      type: "text",
      default: "NextJS | App Router",
    },
    {
      id: "subtitle_heading",
      label: "Subtitle heading type",
      type: "select",
      options: [
        { label: "H2", value: "h2" },
        { label: "H3", value: "h3" },
        { label: "H4", value: "h4" },
      ],
    },
    {
      id: "description",
      label: "Hero description",
      type: "textarea",
      default: "The best personal custom NextJS CMS using JSON files",
    },
    {
      id: "text_alignment",
      label: "Text alignment",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  ],
};
