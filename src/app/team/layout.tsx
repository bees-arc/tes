import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Team | TES Solutions",
  description: "Meet the directors, mechatronics designers, software architects, and AI researchers behind our technological solutions.",
  alternates: { canonical: "/team" }
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
