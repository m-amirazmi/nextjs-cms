import { BaseLayoutProps } from "@/types/layout.types";
import Sidebar from "./sidebar";
import { getGeneralContent } from "@/actions/content.action";

export default async function EditorLayout({ children }: BaseLayoutProps) {
  const pages = await getGeneralContent("pages", "draft");

  return (
    <div className="bg-muted min-h-screen w-full flex">
      <div className="basis-[360px] flex-grow-0 flex-shrink-0 shadow">
        <Sidebar pages={pages} />
      </div>
      <div className="flex-grow-0 flex-shrink-0 basis-[calc(100%-360px)] px-4">
        <div className="shadow min-h-screen">{children}</div>
      </div>
    </div>
  );
}
