"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Network, 
  Database, 
  Bot, 
  ArrowUpRight,
  Truck,
  Package,
  Boxes,
  Activity,
  HeartPulse,
  GraduationCap,
  Factory,
  Store,
  Compass
} from "lucide-react";

// Dynamically import the Three.js Canvas component with SSR disabled
const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />
});

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const primaryIndustries = [
    { name: "Logistics Companies", icon: <Truck className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Courier Services", icon: <Compass className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Delivery Companies", icon: <Package className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Fleet Management", icon: <Activity className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Warehousing Businesses", icon: <Boxes className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Distribution Centers", icon: <Layers className="w-5 h-5 text-[#0071e3]" /> },
    { name: "Supply Chain Operators", icon: <Network className="w-5 h-5 text-[#0071e3]" /> },
    { name: "E-commerce Fulfillment", icon: <Database className="w-5 h-5 text-[#0071e3]" /> }
  ];

  const secondaryIndustries = [
    { name: "Healthcare", icon: <HeartPulse className="w-3.5 h-3.5 text-slate-500" /> },
    { name: "Education", icon: <GraduationCap className="w-3.5 h-3.5 text-slate-500" /> },
    { name: "Manufacturing", icon: <Factory className="w-3.5 h-3.5 text-slate-500" /> },
    { name: "Retail", icon: <Store className="w-3.5 h-3.5 text-slate-500" /> }
  ];

  const capabilities = [
    {
      icon: <Network className="w-5 h-5 text-[#0071e3]" />,
      title: "IoT Solutions",
      desc: "Remote monitoring systems, sensory networks, and automated fleet tracking designed for logistics and distribution systems.",
      href: "/solutions#iot",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0071e3]" />,
      title: "Embedded Systems",
      desc: "Microcontroller programming, multi-layered PCB designs, and firmware development optimized for custom hardware.",
      href: "/solutions#embedded",
    },
    {
      icon: <Database className="w-5 h-5 text-[#0071e3]" />,
      title: "Software & ERP Platforms",
      desc: "High-performance enterprise logistics software, custom ERP platforms, and integrated web systems.",
      href: "/solutions#software",
    },
    {
      icon: <Bot className="w-5 h-5 text-[#0071e3]" />,
      title: "Robotics & AI",
      desc: "Computer vision and predictive analytics coupled with smart industrial robotics for automated warehouses.",
      href: "/solutions#robotics",
    },
  ];

  const recentInsights = [
    {
      date: "FEB 14, 2026",
      category: "IoT // Logistics",
      title: "Orchestrating Smart Warehousing with ESP32 & Node Networks",
      desc: "How decentralized edge sensor nodes are reshaping real-time inventory tracking metrics in modern distribution hubs.",
      readTime: "5 min read"
    },
    {
      date: "JAN 28, 2026",
      category: "AI // Fleet",
      title: "Computer Vision & Edge AI in Fleet Telemetry Operations",
      desc: "Implementing localized deep learning models on vehicles to assess transit risks and auto-optimize route sequences.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-24 px-6 bg-white overflow-hidden">
        {/* Siri-style Wave Background */}
        <HeroCanvas />

        {/* Soft radial grid overlay */}
        <div className="absolute inset-0 dot-bg pointer-events-none opacity-40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-0" />
        
        <div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center gap-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Status Chip */}
            <motion.div variants={itemVariants} className="px-3.5 py-1 rounded-full border border-slate-200/80 bg-slate-50 font-sans text-xs tracking-normal text-slate-600 font-semibold shadow-sm">
              Enterprise Technology Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1d1d1f] leading-[1.1] max-w-4xl"
            >
              Complete Technology Solutions for Modern Businesses
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-[#515154] max-w-2xl font-sans leading-relaxed"
            >
              We deliver end-to-end technology solutions across software development, automation, IoT, AI, embedded systems, robotics, digital platforms, and smart business solutions.
            </motion.p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Link
                href="/solutions"
                className="px-8 py-3 rounded-full bg-[#0071e3] text-white font-sans font-semibold text-sm hover:bg-[#0058b0] transition-all shadow-sm"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-1.5 font-sans font-semibold text-sm text-[#0071e3] hover:underline"
              >
                Contact our team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f5f5f7] relative overflow-hidden">
        {/* Generated background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: "url('/target_industries_bg.png')" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
              Target Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1d1d1f] tracking-tight">
              Operational Focus & Target Sectors
            </h2>
            <p className="text-[#86868b] text-base mt-2 leading-relaxed">
              We design specialized technological layers tailored to primary industrial logistics channels and secondary supporting enterprise networks.
            </p>
          </div>

          {/* Primary Industries Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {primaryIndustries.map((ind, index) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="apple-card p-6 flex items-center gap-4 hover:shadow-apple-hover transition-all bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <span className="font-sans font-semibold text-[#1d1d1f] text-sm">{ind.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Industries */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm"
          >
            <div>
              <span className="font-sans text-xs text-[#86868b] tracking-wide block mb-1 font-semibold">Secondary Support Verticals</span>
              <p className="text-[#86868b] text-xs">Custom integration layouts engineered to optimize supporting business sectors.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {secondaryIndustries.map((sec) => (
                <span
                  key={sec.name}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 font-sans text-xs text-slate-700 font-medium"
                >
                  {sec.icon}
                  {sec.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE DO SECTION */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-8">
              <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
                System Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1d1d1f] tracking-tight">
                Our Technology Capabilities
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#0071e3] hover:underline group"
              >
                View Detailed Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="apple-card p-6 flex flex-col justify-between hover:shadow-apple-hover transition-all bg-white min-h-[220px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                    {cap.icon}
                  </div>
                  <h3 className="font-sans font-bold text-[#1d1d1f] text-lg mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[#86868b] text-sm leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>
                <Link
                  href={cap.href}
                  className="font-sans text-xs font-semibold text-[#0071e3] hover:underline flex items-center gap-1 self-start group mt-auto"
                >
                  Learn more
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR GOAL SECTION */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="apple-card p-8 md:p-12 text-center bg-white shadow-apple"
          >
            <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-6 font-semibold">
              Core Mission
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1d1d1f] tracking-tight leading-snug mb-8 max-w-3xl mx-auto">
              "We exceed customer expectations by offering solutions to exceed expectation and improve day to day business to generate more growth and sucess."
            </h2>
            <div className="h-px bg-slate-100 max-w-md mx-auto my-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-4 text-[#1d1d1f]">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-sans">99.9%</span>
                <span className="text-xs text-[#86868b] mt-1">Uptime SLA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-sans">150+</span>
                <span className="text-xs text-[#86868b] mt-1">IoT Hubs Deployed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-sans">45%</span>
                <span className="text-xs text-[#86868b] mt-1">Efficiency Boost</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-sans">24/7</span>
                <span className="text-xs text-[#86868b] mt-1">Support Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. NEWS & INSIGHTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
                Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1d1d1f] tracking-tight">
                Insights & Technology Reports
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#0071e3] hover:underline group"
            >
              Access Insights Portal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentInsights.map((insight, index) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="apple-card p-8 flex flex-col justify-between bg-white hover:shadow-apple-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between font-sans text-xs text-[#86868b] mb-4 pb-4 border-b border-slate-100">
                    <span>{insight.date}</span>
                    <span className="text-[#0071e3] font-semibold">{insight.category}</span>
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[#1d1d1f] mb-3 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-[#86868b] text-sm leading-relaxed mb-6">
                    {insight.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between font-sans text-xs text-[#86868b] mt-auto">
                  <span>{insight.readTime}</span>
                  <Link href="/insights" className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors flex items-center gap-1 font-semibold">
                    Read article <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-24 px-6 bg-[#f5f5f7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#1d1d1f] tracking-tight mb-6">
            Ready to Accelerate Your Technology Operations?
          </h2>
          <p className="text-[#86868b] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with our engineering teams to map your custom PCB, IoT telemetry, web platform, or industrial robotics infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#1d1d1f] text-white font-sans font-semibold text-sm hover:bg-[#2d2d2f] transition-all shadow-sm"
            >
              Get in touch
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 transition-all font-sans font-semibold text-sm text-[#1d1d1f] shadow-sm"
            >
              Analyze Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
