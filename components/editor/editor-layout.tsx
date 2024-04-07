import { BaseLayoutProps } from "@/types/layout.types";
import Sidebar from "./sidebar";
export default function EditorLayout({ children }: BaseLayoutProps) {
  return (
    <div className="bg-muted min-h-screen w-full flex">
      <div className="basis-[360px] flex-grow-0 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="bg-red-500 flex-grow-0 flex-shrink-0 basis-[calc(100%-360px)]">
        {children}
      </div>
    </div>
  );
}
