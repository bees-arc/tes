import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insights | TES Solutions",
  description: "Read technical logs, hardware designs, and engineering documentation published directly by our technical division leads.",
  alternates: { canonical: "/insights" }
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
