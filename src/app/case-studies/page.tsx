"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle,
  FolderOpen
} from "lucide-react";

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Nexus Route: Dispatch Optimization Engine",
      category: "software",
      categoryLabel: "Software Development",
      industry: "Courier & Delivery Services",
      problem: "Inefficient manual dispatch sequencing and static route scheduling caused 18% delayed deliveries, high driver churn, and escalating fuel expenditures.",
      solution: "Engineered a dynamic web platform that integrates real-time routing engines, predictive traffic analytics, and an offline-first mobile sync tool for drivers.",
      techStack: ["React", "Node.js", "PostgreSQL", "Framer Motion", "Tailwind CSS"],
      results: "34% increase in dispatch velocity, 22% fuel reduction, and 99.4% on-time delivery SLA maintained.",
      telemetry: "LATENCY: 18ms // ENCRYPTION: TLS1.3 // DEPLOYMENT: CLOUD",
      graphic: (
        <div className="w-full h-full bg-[#f5f5f7] relative overflow-hidden flex flex-col justify-between p-4 font-sans text-[10px] text-slate-500 rounded-xl">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-800 font-semibold">Route Optimizer</span>
            <span className="text-[#0071e3] font-semibold">● Active</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <svg className="w-4/5 h-3/4 stroke-[#0071e3]/20 fill-none" viewBox="0 0 100 50">
              <path d="M 10 25 Q 30 5, 50 25 T 90 25" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 10 25 L 30 15 L 50 35 L 70 10 L 90 25" strokeWidth="1.5" stroke="#0071e3" />
              <circle cx="10" cy="25" r="2.5" fill="#0071e3" />
              <circle cx="30" cy="15" r="2.5" fill="#0071e3" />
              <circle cx="50" cy="35" r="2.5" fill="#0071e3" />
              <circle cx="70" cy="10" r="2.5" fill="#0071e3" />
              <circle cx="90" cy="25" r="2.5" fill="#0071e3" />
            </svg>
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full border border-[#0071e3]/20 bg-white text-[#0071e3] text-[9px] font-semibold shadow-sm">
              +34% Speed
            </div>
          </div>
          <div className="flex justify-between text-slate-400 text-[9px] font-medium">
            <span>NODES: 12</span>
            <span>OPTIMIZED: TRUE</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "OptimaYard: Fleet Telemetry & IoT Tracker",
      category: "iot",
      categoryLabel: "IoT & Embedded Systems",
      industry: "Logistics & Warehousing",
      problem: "High latency container locator processes and paper based yard checklists created logistics bottleneck, delaying shipments up to 36 hours.",
      solution: "Designed custom low power IoT trackers using ESP32 modules and sensory arrays, reporting container states in real time via an encrypted MQTT network to a dashboard.",
      techStack: ["ESP32 Firmware", "C++", "Next.js", "WebSockets", "MQTT Broker", "PCB Design"],
      results: "Yard coordination backlogs dropped to zero, locator search times decreased by 92%, and container tracking accuracy reached 99.9%.",
      telemetry: "FREQUENCY: 868MHz // POWER: ULTRA_LOW // NETWORK: LORA",
      graphic: (
        <div className="w-full h-full bg-[#f5f5f7] relative overflow-hidden flex flex-col justify-between p-4 font-sans text-[10px] text-slate-500 rounded-xl">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-800 font-semibold">IoT Schematic</span>
            <span className="text-[#0071e3] font-semibold">● Telemetry</span>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="w-2/3 h-2/3 border border-slate-200 rounded-xl relative p-2 flex items-center justify-center bg-white shadow-sm">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0071e3]/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#0071e3]/10" />
              
              <div className="w-12 h-12 rounded-lg border border-[#0071e3]/30 bg-slate-50 flex items-center justify-center text-accent text-[9px] font-bold">
                ESP32
              </div>
              
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-ping" />
            </div>
          </div>
          <div className="flex justify-between text-slate-400 text-[9px] font-medium">
            <span>FREQ: 868MHz</span>
            <span>BATTERY: 98%</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "IntellectStore: Autonomous Sorting Array",
      category: "ai",
      categoryLabel: "AI & Robotics Automation",
      industry: "E-commerce Fulfillment",
      problem: "Manual product categorization caused high sorting error counts, restricting daily warehouse packages sorted to a maximum of 4,000.",
      solution: "Engineered an AI computer vision camera array over sorting belts to dynamically detect barcode/volume variables, sending signals to automated belt drivers.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Arduino Controllers", "Node.js API"],
      results: "Automated sort speed expanded to 14,000 units/hour, sorting margins of error dropped by 98%, and overall throughput grew by 50%.",
      telemetry: "MODEL: RESNET50 // FPS: 60 // CLASSIFICATION: 99.8%",
      graphic: (
        <div className="w-full h-full bg-[#f5f5f7] relative overflow-hidden flex flex-col justify-between p-4 font-sans text-[10px] text-slate-500 rounded-xl">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-800 font-semibold">AI Camera array</span>
            <span className="text-[#0071e3] font-semibold">● Vision</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-3/5 h-3/5 border-2 border-red-500/30 rounded-lg relative flex items-center justify-center p-2 bg-white shadow-sm">
              <div className="absolute top-1 left-1 border-t-2 border-l-2 border-[#0071e3] w-2.5 h-2.5" />
              <div className="absolute top-1 right-1 border-t-2 border-r-2 border-[#0071e3] w-2.5 h-2.5" />
              <div className="absolute bottom-1 left-1 border-b-2 border-l-2 border-[#0071e3] w-2.5 h-2.5" />
              <div className="absolute bottom-1 right-1 border-b-2 border-r-2 border-[#0071e3] w-2.5 h-2.5" />
              
              <div className="px-2 py-0.5 rounded border border-[#0071e3] bg-[#0071e3]/5 text-[7px] text-[#0071e3] font-bold">
                BARCODE_OK
              </div>
            </div>
          </div>
          <div className="flex justify-between text-slate-400 text-[9px] font-medium">
            <span>FPS: 60</span>
            <span>CONFIDENCE: 99.8%</span>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-[fadeIn_0.8s_ease]">
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Project Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-6">
            Proven Operations, Engineered Excellence
          </h1>
          <p className="text-lg text-[#86868b] font-sans leading-relaxed">
            Explore how TES Solutions bridges advanced technology and daily logistics operations to maximize efficiency, slash costs, and build reliable architectures.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-6 mb-12">
          {[
            { id: "all", label: "All Builds" },
            { id: "software", label: "Software & ERP" },
            { id: "iot", label: "IoT & Embedded" },
            { id: "ai", label: "AI & Robotics" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs transition-all ${
                filter === tab.id
                  ? "bg-[#0071e3] text-white font-semibold shadow-sm"
                  : "text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-350 bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="apple-card p-6 md:p-8 hover:shadow-apple-hover transition-all bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm rounded-3xl"
            >
              {/* Graphic Column */}
              <div className="lg:col-span-4 h-64 lg:h-auto rounded-2xl overflow-hidden relative min-h-[220px]">
                {project.graphic}
              </div>

              {/* Data Content Column */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-[#86868b] border-b border-slate-100 pb-3 mb-4">
                    <span>CLIENT INDUSTRY: <span className="text-slate-800 font-bold">{project.industry}</span></span>
                    <span className="text-[#0071e3] font-semibold">{project.categoryLabel}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1d1d1f] mb-6">
                    {project.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <span className="font-sans text-xs text-[#1d1d1f] font-semibold block mb-1">
                        Problem
                      </span>
                      <p className="text-[#86868b] text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-sans text-xs text-[#1d1d1f] font-semibold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-[#86868b] text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="p-4 rounded-xl bg-[#0071e3]/5 border border-transparent mb-6">
                    <span className="font-sans text-xs text-[#0071e3] font-semibold block mb-1">
                      Verified Results
                    </span>
                    <p className="text-slate-800 font-sans text-sm font-bold flex items-start gap-2 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
                      {project.results}
                    </p>
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 font-sans text-xs text-slate-400">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 font-medium text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 text-[#0071e3] hover:underline font-semibold"
                  >
                    Discuss similar build
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
