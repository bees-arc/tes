import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TES Solutions | Complete Technology Solutions for Modern Businesses",
  description: "TES Solutions designs, develops, and orchestrates custom hardware and software platforms. From low level firmware and multi layer PCBs to computer vision pipelines and enterprise logistics dashboards, we deliver robust operational systems.",
  keywords: ["TES Solutions", "Technology Solutions", "Software Development", "IoT Solutions", "Embedded Systems", "Robotics", "AI Solutions", "Singapore Tech Consulting", "Logistics Automation", "Singapore ERP Development", "Automation Consulting"],
  authors: [{ name: "TES Solutions Engineering Team" }],
  creator: "TES Solutions",
  publisher: "TES Solutions",
  metadataBase: new URL("https://tessolutions.lk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "TES Solutions | Complete Technology Solutions",
    description: "Orchestrating smart business operations through complete, end-to-end technology solutions across software, automation, IoT, embedded systems, and robotics.",
    url: "https://tessolutions.lk",
    siteName: "TES Solutions",
    locale: "en_US",
    type: "website",
  },
  other: {
    "geo.region": "SG-01",
    "geo.placename": "Singapore",
    "geo.position": "1.289195;103.847585",
    "ICBM": "1.289195, 103.847585",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TES Solutions",
              "image": "https://tessolutions.lk/icon.png",
              "telephone": "+65 6789 0123",
              "email": "operations@tes-solutions.sys",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 High Street, Level 28",
                "addressLocality": "Singapore",
                "postalCode": "179434",
                "addressCountry": "SG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 1.289195,
                "longitude": 103.847585
              },
              "url": "https://tessolutions.lk"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
