"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Bot, 
  Eye, 
  CheckCircle,
  Network
} from "lucide-react";

export default function Team() {
  const leadership = [
    {
      name: "Dr. Elena Vance",
      role: "Founder & Director of Systems Engineering",
      bio: "Elena holds a PhD in Mechatronics and Systems Architectures. She spent 12 years coordinating warehouse automation expansions for tier-one logistics networks globally.",
      email: "elena.vance@tes-solutions.sys",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Marcus Sterling",
      role: "Partner & Chief Software Architect",
      bio: "Marcus has led enterprise software integrations for 15+ years. He specializes in low latency distributed systems, offline-first mobile sync layers, and ERP integrations.",
      email: "marcus.sterling@tes-solutions.sys",
      linkedIn: "https://linkedin.com",
    }
  ];

  const technicalTeams = [
    {
      team: "Software Team",
      lead: "Sarah Chen",
      count: "8 Engineers",
      icon: <Code2 className="w-5 h-5 text-[#0071e3]" />,
      focus: "Web platforms, high scalability ERP platforms, secure database routing pipelines, and APIs.",
      stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"]
    },
    {
      team: "AI & Data Team",
      lead: "Dr. Aris Thorne",
      count: "5 Researchers",
      icon: <BrainCircuit className="w-5 h-5 text-[#0071e3]" />,
      focus: "Computer vision classifiers, predictive logistics models, route path optimizers, and data pipelines.",
      stack: ["Python", "TensorFlow", "OpenCV", "PyTorch", "Pandas"]
    },
    {
      team: "IoT Team",
      lead: "Liam O'Connor",
      count: "6 Engineers",
      icon: <Network className="w-5 h-5 text-[#0071e3]" />,
      focus: "Wireless sensor arrays, telemetry trackers, LoRaWAN networks, and real-time socket interfaces.",
      stack: ["C++", "MQTT", "WebSockets", "Node.js", "Redis"]
    },
    {
      team: "Embedded Team",
      lead: "Devon Miller",
      count: "4 Hardware Designers",
      icon: <Cpu className="w-5 h-5 text-[#0071e3]" />,
      focus: "Multi-layered high frequency PCB designs, firmware coding, logic analyzer tests, and prototype assembly.",
      stack: ["Altium Designer", "ESP32", "STM32", "Arduino"]
    },
    {
      team: "Robotics Team",
      lead: "Kaito Sato",
      count: "5 Automation Experts",
      icon: <Bot className="w-5 h-5 text-[#0071e3]" />,
      focus: "Automated warehouse sorting controllers, motor driving logic, and PLC programming for sorting belts.",
      stack: ["ROS 2", "C++", "Python", "PLC Logic", "Modbus"]
    },
    {
      team: "UI/UX Team",
      lead: "Maya Lin",
      count: "3 Designers",
      icon: <Eye className="w-5 h-5 text-[#0071e3]" />,
      focus: "Sleek industrial visual interfaces, mobile route sheets wireframing, user persona mapping, and design tokens.",
      stack: ["Figma", "Tailwind CSS", "Framer Motion"]
    },
    {
      team: "QA & Integration Team",
      lead: "Victor Vance",
      count: "4 Engineers",
      icon: <CheckCircle className="w-5 h-5 text-[#0071e3]" />,
      focus: "Automated integration runs, end-to-end user path flows testing, circuit load tests, and hardware compliance.",
      stack: ["Cypress", "Playwright", "Jest", "CI/CD Actions"]
    }
  ];

  const tools = [
    {
      name: "Python",
      description: "AI & Data Pipelines",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700">
          <path d="M12 2c-5.5 0-5 2-5 4v2h5v1H5c-2 0-3 1.5-3 4.5S3.5 18 6.5 18H7v-2.5C7 13.6 8.6 12 10.5 12h3c1.9 0 3.5-1.6 3.5-3.5V6c0-2-1.5-4-5-4zm4.5 10H14c-1.9 0-3.5 1.6-3.5 3.5V22c5.5 0 5-2 5-4v-2h-5v-1h7c2 0 3-1.5 3-4.5s-1.5-4.5-4.5-4.5zM9 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      )
    },
    {
      name: "C++",
      description: "Embedded Systems & Firmware",
      logo: (
        <div className="w-8 h-8 rounded-full border-2 border-slate-700 flex items-center justify-center font-mono text-[10px] font-bold text-slate-700">
          C++
        </div>
      )
    },
    {
      name: "JavaScript",
      description: "App Logic & Interactive Web",
      logo: (
        <div className="w-8 h-8 bg-slate-700 text-white flex items-center justify-center font-mono text-[11px] font-bold rounded">
          JS
        </div>
      )
    },
    {
      name: "React",
      description: "Frontend Interface Libraries",
      logo: (
        <svg viewBox="-11.5 -10.23 23 20.46" className="w-8 h-8 stroke-slate-700 fill-none animate-spin-slow animate-[spin_10s_linear_infinite]">
          <circle r="2.05" fill="#475569" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      )
    },
    {
      name: "Node.js",
      description: "High Throughput Server Runtimes",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700">
          <path d="M12 2L4 6.6v9.2L12 22l8-4.6v-9.2L12 2zm6 12.8l-6 3.5-6-3.5V7.6l6-3.5 6 3.5v7.2zM12 9V6.3l4.5 2.6L12 11.5V9zm-1.5 3.4l-4.5-2.6 4.5-2.6v5.2zm3 0v5.2l-4.5-2.6 4.5-2.6z"/>
        </svg>
      )
    },
    {
      name: "ESP32",
      description: "Edge Telemetry Microcontrollers",
      logo: (
        <div className="w-8 h-8 border border-slate-700 rounded bg-white flex items-center justify-center font-mono text-[8px] text-slate-700 p-1 leading-none text-center font-bold">
          ESP32
        </div>
      )
    },
    {
      name: "Arduino",
      description: "Mechatronic Hardware Controllers",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-slate-700 fill-none" strokeWidth="1.5">
          <path d="M8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          <path d="M7 12h2m4 0h2m-1-1v2"/>
        </svg>
      )
    },
    {
      name: "TensorFlow",
      description: "Deep Learning & Machine Vision",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 3.2L17.5 8v8L12 18.8 6.5 16V8L12 5.2zm-1.5 5.3v3h3v-3h-3z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-[fadeIn_0.8s_ease]">
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Engineering Directory
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-6">
            Meet the Builders of TES Solutions
          </h1>
          <p className="text-lg text-[#86868b] font-sans leading-relaxed">
            Our teams are comprised of hardware planners, code writers, and machine learning researchers working together to deliver high-performance enterprise systems.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-24">
          <span className="font-sans text-xs text-[#1d1d1f] tracking-wide block mb-8 font-bold">
            Leadership & Direction
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="apple-card p-8 rounded-3xl bg-white relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="font-sans font-bold text-[#1d1d1f] text-2xl mb-1">{leader.name}</h3>
                  <p className="font-sans text-xs text-[#0071e3] uppercase tracking-wider mb-6 font-semibold">
                    {leader.role}
                  </p>
                  <p className="text-[#86868b] text-sm leading-relaxed mb-8 font-sans">
                    {leader.bio}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 font-sans text-xs text-[#86868b]">
                  <a
                    href={leader.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#1d1d1f] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-slate-500" /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-1.5 hover:text-[#1d1d1f] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" /> {leader.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Teams Grid */}
        <div className="mb-24">
          <span className="font-sans text-xs text-[#1d1d1f] tracking-wide block mb-8 font-bold">
            Engineered Divisions
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalTeams.map((team, idx) => (
              <motion.div
                key={team.team}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="apple-card p-6 flex flex-col justify-between hover:shadow-apple-hover transition-colors shadow-sm rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center">
                        {team.icon}
                      </div>
                      <span className="font-sans font-bold text-[#1d1d1f] text-sm">
                        {team.team}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-slate-400 font-semibold">{team.count}</span>
                  </div>
                  
                  <p className="text-[#86868b] text-xs leading-relaxed mb-6 font-sans">
                    {team.focus}
                  </p>
                </div>

                <div className="font-sans text-xs text-[#86868b] pt-4 border-t border-slate-100 space-y-1">
                  <div>LEAD: <span className="text-[#1d1d1f] font-bold">{team.lead}</span></div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {team.stack.map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/50 text-[10px] text-slate-600 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="border-t border-slate-200 pt-20">
          <div className="max-w-xl mb-12">
            <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
              Technology Stack
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#1d1d1f] tracking-tight">
              Our Core Technical Foundations
            </h2>
            <p className="text-[#86868b] text-sm mt-2 leading-relaxed">
              We build systems on standard, verified, high-performance programming runtimes and electrical architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="apple-card p-5 flex items-center gap-4 hover:shadow-apple-hover transition-all group shadow-sm bg-white"
              >
                <div className="p-2 rounded-lg border border-slate-100 bg-slate-50 group-hover:border-slate-300 transition-colors">
                  {tool.logo}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[#1d1d1f] text-sm group-hover:text-[#0071e3] transition-colors leading-none mb-1">
                    {tool.name}
                  </h3>
                  <span className="font-sans text-xs text-slate-400 block leading-tight">
                    {tool.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
