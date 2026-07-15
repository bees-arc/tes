"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  Activity
} from "lucide-react";

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      id: 1,
      title: "Orchestrating Smart Warehousing with ESP32 & Node Networks",
      excerpt: "How decentralized edge sensor nodes are reshaping real-time inventory tracking metrics in modern distribution hubs. Learn how low-power mesh radios prevent telemetry drops.",
      date: "FEB 14, 2026",
      category: "IoT & Embedded",
      readTime: "5 min read",
      author: "Sarah Chen",
      tags: ["ESP32", "Mesh Networking", "Warehousing"]
    },
    {
      id: 2,
      title: "Computer Vision & Edge AI in Fleet Telemetry Operations",
      excerpt: "Implementing localized deep learning models on vehicles to assess transit risks, optimize route sequences, and analyze video feeds without heavy network backhaul costs.",
      date: "JAN 28, 2026",
      category: "AI & Data Solutions",
      readTime: "7 min read",
      author: "Dr. Aris Thorne",
      tags: ["Computer Vision", "TensorFlow", "Fleet Telemetry"]
    },
    {
      id: 3,
      title: "The Shift to Custom PCBs in Logistics Tracking Systems",
      excerpt: "Why off-the-shelf tracking units are costing logistics enterprises 30% more in power waste and how custom electrical layouts increase sensor longevity to 5 years.",
      date: "DEC 10, 2025",
      category: "Embedded Systems",
      readTime: "8 min read",
      author: "Devon Miller",
      tags: ["PCB Layout", "Low Power Design", "Logistics Hardware"]
    },
    {
      id: 4,
      title: "Secure MQTT Communication Pipelines for Industrial Edge Nodes",
      excerpt: "A deep dive into security parameters of MQTT routing. Explores TLS certificates mapping on microcontrollers and how to establish fallback routes in poor cellular zones.",
      date: "NOV 04, 2025",
      category: "IoT & Security",
      readTime: "6 min read",
      author: "Liam O'Connor",
      tags: ["MQTT", "Security Protocols", "Industrial Automation"]
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-[fadeIn_0.8s_ease]">
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Engineering Logs
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-6">
            Insights, Blueprints & Operational Data
          </h1>
          <p className="text-lg text-[#86868b] font-sans leading-relaxed">
            Read technical logs, hardware designs, and engineering documentation published directly by our technical division leads.
          </p>
        </div>

        {/* Search bar & statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center pb-8 border-b border-slate-200">
          <div className="lg:col-span-8 relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, tags, or terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 hover:border-slate-350 focus:border-accent focus:outline-none rounded-xl py-3 pl-12 pr-4 font-sans text-sm text-slate-800 placeholder-slate-400 transition-colors shadow-inner"
            />
          </div>
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-6 font-sans text-xs text-[#86868b] font-medium">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#0071e3]" />
              <span>Articles: {articles.length}</span>
            </div>
            <span>Updated: Just now</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article grid */}
          <div className="lg:col-span-8 space-y-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.04 }}
                  className="apple-card p-8 bg-white hover:shadow-apple-hover transition-all flex flex-col justify-between group relative shadow-sm rounded-3xl"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-[#86868b] border-b border-slate-100 pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#0071e3]" /> {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" /> {article.author}
                        </span>
                      </div>
                      <span className="text-[#0071e3] font-semibold">{article.category}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-sans font-bold text-[#1d1d1f] mb-3 group-hover:text-[#0071e3] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-sans">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 font-sans text-xs text-[#86868b] mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 font-medium text-[10px]"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 self-start sm:self-auto font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                      <span>•</span>
                      <button className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors flex items-center gap-1 group font-semibold">
                        Read post <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="apple-card p-12 text-center text-slate-400 font-sans text-sm bg-white shadow-sm">
                No logs matching query specified.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* System Status Log */}
            <div className="apple-card p-6 bg-white shadow-sm rounded-2xl">
              <div className="flex items-center gap-2 text-[#1d1d1f] border-b border-slate-100 pb-3 mb-4">
                <Activity className="w-4 h-4 text-[#0071e3]" />
                <span className="font-bold">Active System Feed</span>
              </div>
              <ul className="space-y-4 text-xs text-[#86868b] font-medium">
                <li className="flex gap-2">
                  <span className="text-[#0071e3]">14:02</span>
                  <span>PCB routing for Yard_Gate L1 validated.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0071e3]">13:58</span>
                  <span>Model training loss reached 0.012 on SORT_ARRAY_v3.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0071e3]">12:30</span>
                  <span>Secure TLS keys rolled over on ESP32 field units.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0071e3]">09:12</span>
                  <span>Central database backup sequence: SUCCESS.</span>
                </li>
              </ul>
            </div>

            {/* Subscribe Box */}
            <div className="apple-card p-6 bg-white shadow-sm rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-md mb-2">
                Subscribe to Tech Logs
              </h3>
              <p className="text-[#86868b] text-xs leading-relaxed mb-6 font-sans">
                Get monthly engineering logs, PCB circuit revisions, and automation analysis directly in your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 font-sans text-xs">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-400 text-xs shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full text-center py-2.5 rounded-full bg-[#0071e3] text-white font-semibold text-xs hover:bg-[#0058b0] transition-all shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
