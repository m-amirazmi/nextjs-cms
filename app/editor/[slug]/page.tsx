import { getContent } from "@/actions/content.action";
import DynamicPage from "@/components/editor/dynamic-page";
import { CustomPageProps } from "@/types/editor-page.types";
import { Content } from "@/types/store.types";

/**
 * Steps on getting the page content
 * 1. Get the page name
 * 2. Get the content based on the page from JSON file
 * 3. Update the content store/state from JSON file
 * 4. Get the updated content store/state - page based
 * 5. Loop over the sections based on updated content
 *
 */

export default async function CustomPage({ params }: CustomPageProps) {
  const { slug } = params;
  const content: Content = await getContent(slug, "draft");

  return <DynamicPage content={content} />;
}
