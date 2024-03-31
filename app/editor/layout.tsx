import SectionsSidebar from "@/components/editor/sections-sidebar";
import { LayoutProps } from "@/lib/types";

export default function EditorLayout({ children }: LayoutProps) {
  return (
    <div className="bg-muted">
      <div className="h-16 sticky top-0 border-b bg-background">
        This is the page selection
      </div>
      <div className="flex">
        <SectionsSidebar />
        <div className="basis-[calc(100vw-600px)] flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)]">
          <div className="p-2 h-full">
            <div className="bg-background rounded shadow h-full">
              {children}
            </div>
          </div>
        </div>
        <div className="basis-[300px] flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)] sticky top-16 border-l bg-background">
          This is the selected component detail
        </div>
      </div>
    </div>
  );
}
