import { getContent } from "@/actions/content.action";
import Sections from "@/components/sections";

export default async function Home() {
  const { content, sections } = await getContent("homepage");
  return <Sections content={content} sections={sections} />;
}
