import { BaseLayoutProps } from "@/types/layout.types";

export default function Layout({ children }: BaseLayoutProps) {
  return <div className="bg-white">{children}</div>;
}
