import { HeroProps } from "@/lib/types";

export default function Hero({ title = "Default Hero" }: HeroProps) {
  return <div>{title}</div>;
}
