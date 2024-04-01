"use client";

import Sections from "@/components/sections";
import { useEditorStore } from "@/store/editor-store";

export default function CustomPage() {
  const { content, sections } = useEditorStore((state) => state);
  return <Sections content={content} sections={sections} />;
}
