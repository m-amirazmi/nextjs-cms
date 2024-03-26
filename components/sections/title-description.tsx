import { TitleDescriptionProps } from "@/lib/types";

export default function TitleDescription({
  description,
  title,
}: TitleDescriptionProps) {
  return (
    <div>
      Title: {title}
      description: {description}
    </div>
  );
}
