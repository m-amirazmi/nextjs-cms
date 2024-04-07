"use client";

import { Page } from "@/types/editor-page.types";
import { Radio } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import PageSelection from "./editor-header/page-selection";

export default function Sidebar({ pages }: { pages: Page[] }) {
  const pathname = usePathname();
  const removeEditor = pathname.replace("/editor/", "/");

  return (
    <aside className="sticky bg-white h-screen top-0 left-0">
      <div className="flex items-center gap-2 justify-stretch border-b p-4">
        <PageSelection pages={pages} parentPath="/editor" />
        <Button variant="outline" asChild>
          <Link href={removeEditor}>
            <Radio size={20} />
          </Link>
        </Button>
      </div>
      <div></div>
    </aside>
  );
}
