import { BaseLayoutProps } from "@/types/layout.types";

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <h1 className="text-3xl font-bold">Editor Components</h1>
      <div className="flex flex-col gap-y-4">{children}</div>
    </div>
  );
}
