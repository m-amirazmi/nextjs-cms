"use client";

import { setContent } from "@/actions/content.action";
import AddSection from "@/components/editor/add-section";
import { Button } from "@/components/ui/button";
import { LayoutProps } from "@/lib/types";
import { useEditorStore } from "@/store/editor-store";
import { CirclePlus } from "lucide-react";

export default function EditorLayout({ children }: LayoutProps) {
  const content = useEditorStore((state) => state.content);
  const sections = useEditorStore((state) => state.sections);

  console.log(content, sections);

  return (
    <div className="bg-muted">
      <div className="h-16 sticky top-0 border-b bg-background">
        This is the page selection
      </div>
      <div className="flex">
        <div className="basis-[300px] flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)] sticky top-16 bg-background border-r">
          <div className="h-full w-full p-4">
            <AddSection />
          </div>
        </div>
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
