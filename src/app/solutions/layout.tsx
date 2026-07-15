import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Solutions | TES Solutions",
  description: "Explore our capabilities in software engineering, mobile development, IoT telemetry trackers, embedded PCB design, computer vision AI, and mechatronic robotics automation.",
  alternates: { canonical: "/solutions" }
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
