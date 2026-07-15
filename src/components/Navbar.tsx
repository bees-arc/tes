"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tech Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 border rounded-full px-6 py-2.5 ${
          scrolled
            ? "glass-panel border-slate-200/80 shadow-apple"
            : "bg-white/85 backdrop-blur-md border-slate-200/60 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <svg viewBox="0 0 120 40" className="w-[110px] h-[36px] select-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="2" width="100" height="3.5" rx="1" fill="#0A2540" />
              <text x="13" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#E31837">T</text>
              <text x="50" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#0071E3">E</text>
              <text x="87" y="24" fontFamily="var(--font-sans), sans-serif" fontSize="23" fontWeight="900" fill="#1D1D1F">S</text>
              <text x="13" y="34" fontFamily="var(--font-sans), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="2.8" fill="#1D1D1F">SOLUTIONS</text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-sans font-medium tracking-normal transition-colors py-1.5 ${
                    isActive ? "text-[#0071e3]" : "text-[#515154] hover:text-[#1d1d1f]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-4 py-1.5 rounded-full bg-[#1d1d1f] text-white font-sans font-medium text-xs hover:bg-[#2d2d2f] transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#515154] hover:text-[#1d1d1f] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col md:hidden pt-24"
          >
            <div className="flex-1 px-6 py-6 flex flex-col gap-5 max-w-lg mx-auto w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-sans font-semibold flex items-center justify-between border-b border-slate-100 pb-3 ${
                        isActive ? "text-[#0071e3]" : "text-[#1d1d1f]"
                      }`}
                    >
                      {link.name}
                      <span className="text-xs text-slate-350">→</span>
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-auto pb-8 flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3.5 rounded-full bg-[#0071e3] text-white font-sans font-semibold text-xs tracking-wide shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
