import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | TES Solutions",
  description: "Explore our archive of successfully integrated systems, routing algorithms, IoT telemetry tracking platforms, and sorting vision arrays.",
  alternates: { canonical: "/case-studies" }
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
