import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering | TES Solutions",
  description: "Get in touch with our system engineers, submit project specs, request telemetry blueprints, or explore our office coordinate mapping.",
  alternates: { canonical: "/contact" }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
