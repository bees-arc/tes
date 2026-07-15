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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "glass-panel border-border-custom py-3 shadow-apple"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center shadow-sm">
              <span className="text-white font-sans text-xs font-bold">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold tracking-tight text-[#1d1d1f] text-md">
                TES Solutions
              </span>
            </div>
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
