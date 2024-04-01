import { SectionSchema } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface HeroProps {
  title: string;
  subtitle: string;
  subtitle_heading: string;
  description: string;
  text_alignment: "left" | "center" | "right" | "justify";
  banner_size: "small" | "medium" | "large";
}

export default function Hero({
  title,
  subtitle,
  description,
  text_alignment,
  banner_size,
}: HeroProps) {
  return (
    <div
      className={cn(
        "w-full p-8 bg-gray-200",
        banner_size === "small" && "h-[calc((100vh/3)*1)]",
        banner_size === "medium" && "h-[calc((100vh/3)*2)]",
        banner_size === "large" && "h-screen"
      )}
    >
      <div
        className={cn(
          "w-full h-full flex justify-center flex-col gap-y-1",
          text_alignment === "left" && "items-start",
          text_alignment === "center" && "items-center",
          text_alignment === "right" && "items-end"
        )}
      >
        <h3 className="text-muted-foreground text-sm">{subtitle}</h3>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export const heroSchema: SectionSchema = {
  name: "Hero",
  settings: [
    {
      id: "title",
      label: "Hero title",
      type: "text",
      defaultValue: "Custom NextJS CMS",
      placeholder: "Enter the hero title text",
      smallnote: "The title text will be appeared as H1 heading",
      message: "The title must be less atleast 2 characters",
    },
    {
      id: "subtitle",
      label: "Hero subtitle",
      type: "text",
      defaultValue: "NextJS | App Router",
    },
    {
      id: "description",
      label: "Hero description",
      type: "textarea",
      defaultValue: "The best personal custom NextJS CMS using JSON files",
    },
    {
      id: "text_alignment",
      label: "Text alignment",
      type: "select",
      placeholder: "Select one",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    {
      id: "banner_size",
      label: "Banner size",
      type: "select",
      placeholder: "Select one",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
    },
  ],
};
