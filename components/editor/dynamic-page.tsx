"use client";

import { Content } from "@/types/store.types";

interface DynamicPageProps {
  content: Content;
}

export default function DynamicPage({ content }: DynamicPageProps) {
  return (
    <main className="h-full">
      <h1 className="text-6xl">{content.title}</h1>
    </main>
  );
}
