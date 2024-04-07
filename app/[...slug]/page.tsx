import { getContent } from "@/actions/content.action";
import DynamicPage from "@/components/editor/dynamic-page";
import { CustomPageProps } from "@/types/editor-page.types";
import { Content } from "@/types/store.types";

export default async function CustomPage({ params }: CustomPageProps) {
  const { slug } = params;

  const pagePath = slug.join("_");
  const content: Content = await getContent(pagePath, "publish");

  return <DynamicPage content={content} />;
}
