"use client";

import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "WhatsApp", href: "https://wa.me/mocknumber" },
  ];

  return (
    <footer className="bg-[#f5f5f7] border-t border-border-custom relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Vision */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group">
              <svg viewBox="0 0 120 40" className="w-[110px] h-[36px] select-none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="2" width="100" height="3.5" rx="1" fill="#0A2540" />
                <text x="13" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#E31837">T</text>
                <text x="50" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#0071E3">E</text>
                <text x="87" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#1D1D1F">S</text>
                <text x="13" y="34" fontFamily="var(--font-sans), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="2.8" fill="#1D1D1F">SOLUTIONS</text>
              </svg>
            </Link>
            <p className="text-[#86868b] text-sm max-w-sm font-sans leading-relaxed">
              Orchestrating smart business operations through complete, end-to-end technology solutions across software, automation, IoT, embedded systems, and robotics.
            </p>
          </div>

          {/* Quick Sitemap */}
          <div>
            <span className="block font-sans text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-normal mb-4">
              Navigation
            </span>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Tech Solutions", href: "/solutions" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Team Overview", href: "/team" },
                { name: "Insights Portal", href: "/insights" },
                { name: "Contact Gateway", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#86868b] hover:text-[#1d1d1f] transition-colors flex items-center gap-1 group text-xs font-medium"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-slate-600 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <span className="block font-sans text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-normal mb-4">
              Connect
            </span>
            <ul className="space-y-3 font-sans text-sm">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#86868b] hover:text-[#1d1d1f] transition-colors flex items-center justify-between border-b border-slate-200/40 pb-1 text-xs font-medium group"
                  >
                    <span>{social.name}</span>
                    <span className="text-[10px] text-slate-350 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#86868b]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} TES Solutions Systems Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 font-medium text-[10px]">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              GLOBAL OPERATIONS // ASIA PACIFIC
            </span>
            <span className="flex items-center gap-1">
              Designed with care in 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
