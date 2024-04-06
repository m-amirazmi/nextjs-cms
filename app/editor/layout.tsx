import { createPage } from "@/actions/content.action";
import { Button } from "@/components/ui/button";
import { BaseLayoutProps } from "@/types/layout.types";

export default function EditorLayout({ children }: BaseLayoutProps) {
  return (
    <div className="bg-muted min-h-screen w-full flex flex-col gap-y-6">
      {children}
    </div>
  );
}
