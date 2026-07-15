"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Wifi, 
  Cpu, 
  BrainCircuit, 
  Bot, 
  CheckCircle,
  Search,
  Settings,
  Eye,
  Rocket,
  HelpCircle
} from "lucide-react";

export default function Solutions() {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: "software",
      icon: <Code2 className="w-6 h-6 text-[#0071e3]" />,
      title: "Software Development",
      description: "Custom built enterprise grade platforms optimized for scalability, speed, and real time synchronization.",
      bullets: ["Web platforms & portals", "Custom ERP systems", "Centralized management dashboards"],
      query: "software"
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-6 h-6 text-[#0071e3]" />,
      title: "Mobile App Development",
      description: "High performance native and cross platform mobile applications with offline capability and local sync engines.",
      bullets: ["Android systems & telemetry", "iOS native applications", "Hybrid field operation tools"],
      query: "mobile"
    },
    {
      id: "iot",
      icon: <Wifi className="w-6 h-6 text-[#0071e3]" />,
      title: "IoT Solutions",
      description: "End-to-end internet of things infrastructure connecting edge physical devices to cloud command architectures.",
      bullets: ["Asset monitoring systems", "Remote control actuators", "Distributed sensor networks"],
      query: "iot"
    },
    {
      id: "embedded",
      icon: <Cpu className="w-6 h-6 text-[#0071e3]" />,
      title: "Embedded Systems",
      description: "Low level electronics engineering including schematic creation, circuit layout, and specialized firmware.",
      bullets: ["Multi-layer PCB design", "Firmware development (C/C++)", "Microcontroller programming (ESP32, STM32)"],
      query: "embedded"
    },
    {
      id: "ai",
      icon: <BrainCircuit className="w-6 h-6 text-[#0071e3]" />,
      title: "AI & Data Solutions",
      description: "Artificial intelligence systems that turn raw telemetry feeds into operational foresight and automated decisions.",
      bullets: ["Computer vision models", "Predictive maintenance metrics", "Data processing pipelines"],
      query: "ai"
    },
    {
      id: "robotics",
      icon: <Bot className="w-6 h-6 text-[#0071e3]" />,
      title: "Robotics & Automation",
      description: "Mechatronic systems designed for industrial automation, smart warehousing, and high throughput operations.",
      bullets: ["Industrial line automation", "Smart robotics orchestrator", "Autonomous system design"],
      query: "robotics"
    }
  ];

  const processSteps = [
    {
      title: "Discover",
      icon: <Search className="w-4 h-4" />,
      tag: "01",
      desc: "We analyze your existing workflow parameters, identify operational bottlenecks, and scope exact system requirements."
    },
    {
      title: "Design",
      icon: <Settings className="w-4 h-4" />,
      tag: "02",
      desc: "Detailed architectural blueprints, system schemas, UI/UX mockups, and hardware routing maps are modeled."
    },
    {
      title: "Develop",
      icon: <Code2 className="w-4 h-4" />,
      tag: "03",
      desc: "Our engineering units write clean code, lay out PCB schematics, program firmware, and train models."
    },
    {
      title: "Test",
      icon: <Eye className="w-4 h-4" />,
      tag: "04",
      desc: "Rigorous quality controls, edge condition tests, circuit signal analysis, and staging environment runs."
    },
    {
      title: "Deploy",
      icon: <Rocket className="w-4 h-4" />,
      tag: "05",
      desc: "Zero downtime software updates, physical hardware integration, database migration, and live systems sync."
    },
    {
      title: "Support",
      icon: <HelpCircle className="w-4 h-4" />,
      tag: "06",
      desc: "Continuous health checks, 24/7 telemetry monitoring, system patches, and operational scaling support."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro Section (Headline strictly matches PDF) */}
        <div className="max-w-3xl mb-20 animate-[fadeIn_0.8s_ease]">
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Capabilities Matrix
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-6">
            Technology Services Tailored for our Business
          </h1>
          <p className="text-lg text-[#86868b] font-sans leading-relaxed">
            TES Solutions designs, develops, and orchestrates custom hardware and software platforms. From low level firmware and multi layer PCBs to computer vision pipelines and enterprise logistics dashboards, we deliver robust operational systems.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="apple-card p-8 flex flex-col justify-between hover:shadow-apple-hover transition-all bg-white shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-sans font-bold text-[#1d1d1f] text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/contact?service=${service.query}`}
                className="w-full text-center py-3 rounded-full bg-slate-50 border border-slate-200 hover:bg-[#0071e3] hover:text-white font-sans font-semibold text-xs text-[#0071e3] transition-all duration-300 shadow-sm"
              >
                Initiate Project Spec
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline Section */}
        <div className="border-t border-slate-200 pt-24">
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
              Execution Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1d1d1f] tracking-tight">
              Our Project Execution Process
            </h2>
            <p className="text-[#86868b] text-sm mt-2 leading-relaxed">
              We execute our engineering lifecycles with absolute precision, checking performance parameters at every single stage.
            </p>
          </div>

          {/* Interactive Flow Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Steps Left Selector */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 lg:pr-6 gap-2">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all shrink-0 text-left font-sans text-xs ${
                      isActive 
                        ? "bg-[#0071e3] text-white font-semibold shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <span className={`text-[10px] ${isActive ? "text-white/80" : "text-[#0071e3] font-bold"}`}>
                      {step.tag}
                    </span>
                    <span className="font-sans font-semibold text-sm">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Panel Right */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="apple-card p-8 bg-white min-h-[200px] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3]">
                        {processSteps[activeStep].icon}
                      </div>
                      <span className="font-sans font-bold text-[#1d1d1f] text-xl">
                        {processSteps[activeStep].title} Stage
                      </span>
                    </div>
                    <span className="font-sans text-xs text-slate-400">
                      Step {processSteps[activeStep].tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans">
                    {processSteps[activeStep].desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
