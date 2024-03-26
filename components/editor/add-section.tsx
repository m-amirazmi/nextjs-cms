"use client";

import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import SectionsDropdown from "./sections-dropdown";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AddSection() {
  const [open, setOpen] = useState(false);

  const handleCloseDropdown = () => setOpen(false);

  return (
    <div className="relative">
      <Button
        className={cn(
          "flex gap-2 items-center w-full justify-start",
          open && "bg-muted"
        )}
        variant="ghost"
        onClick={() => setOpen(true)}
      >
        <CirclePlus size={16} />
        <span>Add Section</span>
      </Button>
      {open && <SectionsDropdown handleCloseDropdown={handleCloseDropdown} />}
    </div>
  );
}
