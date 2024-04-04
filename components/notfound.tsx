import React from "react";
import { Button } from "./ui/button";

export default function NotFound({ page }: { page: string }) {
  return (
    <div className="flex flex-col gap-y-6">
      <h1>Page Not Found.</h1>
      <Button className="flex items-center gap-2">
        <span>Create</span>
        <span>{page}</span>
      </Button>
    </div>
  );
}
