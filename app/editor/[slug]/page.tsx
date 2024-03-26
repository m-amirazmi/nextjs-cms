import About from "@/app/(main)/about/page";
import Home from "@/app/(main)/page";
import { DynamicPageObject, DynamicPageProps } from "@/lib/types";

const pages: DynamicPageObject = {
  homepage: Home,
  about: About,
};

export default function CustomPage({ params }: DynamicPageProps) {
  const Page = pages[params.slug];
  return <Page />;
}
