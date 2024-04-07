import { getGeneralContent } from "@/actions/content.action";
import PageSelection from "./editor-header/page-selection";

export default async function Sidebar() {
  const pages = await getGeneralContent("pages", "draft");

  return (
    <aside className="sticky top-0 left-0 p-4">
      <div>
        <PageSelection pages={pages} parentPath="/editor" />
      </div>
    </aside>
  );
}
