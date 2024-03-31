"use client";

import { cn } from "@/lib/utils";
import { useEditorLayoutStore } from "@/store/editor-store";

interface ContentProps {
  children: React.ReactNode;
}

export default function EditorContent({ children }: ContentProps) {
  const isSectionSchemaOpen = useEditorLayoutStore(
    (state) => state.sectionSchemaOpen
  );

  return (
    <div
      className={cn(
        "flex-grow-0 flex-shrink-0 h-[calc(100vh-64px)]",
        !isSectionSchemaOpen && "basis-[calc(100vw-300px)]",
        isSectionSchemaOpen && "basis-[calc(100vw-600px)]"
      )}
    >
      <div className="p-2 h-full">
        <div className="bg-background rounded shadow h-full">{children}</div>
      </div>
    </div>
  );
}
