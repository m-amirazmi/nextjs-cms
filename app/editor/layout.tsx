import EditorLayout from "@/components/editor/editor-layout";
import { BaseLayoutProps } from "@/types/layout.types";

export default function Layout({ children }: BaseLayoutProps) {
  return <EditorLayout>{children}</EditorLayout>;
}
