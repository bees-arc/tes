"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageSquare,
  Terminal,
  Send,
  CheckCircle,
  Activity
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormState((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4 text-[#0071e3]" /> },
    { name: "Facebook", href: "https://facebook.com", icon: <Facebook className="w-4 h-4 text-[#0071e3]" /> },
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-4 h-4 text-[#0071e3]" /> },
    { name: "WhatsApp", href: "https://wa.me/mocknumber", icon: <MessageSquare className="w-4 h-4 text-[#0071e3]" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Direct Contact & Map */}
      <div className="lg:col-span-5 space-y-8 animate-[fadeIn_0.8s_ease]">
        <div>
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Connect
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-6">
            Connect with Our Engineering Units
          </h1>
          <p className="text-[#86868b] text-sm leading-relaxed font-sans">
            Have an upcoming build, PCB design requirement, custom ERP software need, or automation project? Open a transmission line or submit the terminal form.
          </p>
        </div>

        {/* Contact Specs */}
        <div className="space-y-4 font-sans text-sm">
          <div className="apple-card bg-white p-5 flex items-start gap-4 shadow-sm rounded-2xl">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-sans text-[10px] text-slate-400 font-semibold mb-0.5">
                Direct Phone
              </span>
              <a href="tel:+6567890123" className="text-slate-800 hover:text-accent font-sans text-sm transition-colors font-bold">
                +65 6789 0123
              </a>
            </div>
          </div>

          <div className="apple-card bg-white p-5 flex items-start gap-4 shadow-sm rounded-2xl">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-sans text-[10px] text-slate-400 font-semibold mb-0.5">
                Email
              </span>
              <a href="mailto:operations@tes-solutions.sys" className="text-slate-800 hover:text-accent font-sans text-sm transition-colors font-bold">
                operations@tes-solutions.sys
              </a>
            </div>
          </div>

          <div className="apple-card bg-white p-5 flex items-start gap-4 shadow-sm rounded-2xl">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-sans text-[10px] text-slate-400 font-semibold mb-0.5">
                Address
              </span>
              <p className="text-slate-800 text-sm font-semibold">
                100 High Street, Level 28,<br />
                Singapore 179434
              </p>
            </div>
          </div>
        </div>

        {/* Social channels matrix */}
        <div className="apple-card bg-white p-6 shadow-sm rounded-2xl">
          <span className="block font-sans text-[10px] text-slate-400 font-bold mb-4">
            Connect online
          </span>
          <div className="grid grid-cols-2 gap-3 font-sans text-xs">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:border-accent/35 hover:bg-slate-100/60 transition-all group"
              >
                {social.icon}
                <span className="text-slate-600 group-hover:text-accent transition-colors font-semibold">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Google Map Embedded */}
        <div className="apple-card rounded-2xl overflow-hidden h-64 relative group border-glow-hover shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917897258!2d103.84758531533465!3d1.2891945621453303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1909e1e24741%3A0xf6398f86ec55e1b1!2s100%20High%20St%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1626359000000!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Office Location Map"
            className="w-full h-full relative z-0"
          />
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="lg:col-span-7">
        <div className="apple-card bg-white rounded-3xl p-8 relative h-full flex flex-col justify-center min-h-[500px] shadow-sm">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <span className="font-sans font-bold text-slate-800 text-xl">
                    Request Form
                  </span>
                  <span className="font-sans text-xs text-slate-400">
                    Secure transmission
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-sans text-xs text-slate-500 font-bold">
                        Name *
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Dr. John Doe"
                        className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all shadow-inner"
                      />
                    </div>
                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="font-sans text-xs text-slate-500 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Logistics Systems Inc."
                        className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-sans text-xs text-slate-500 font-bold">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john.doe@company.com"
                        className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all shadow-inner"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-sans text-xs text-slate-500 font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+65 9123 4567"
                        className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="font-sans text-xs text-slate-500 font-bold">
                      Service Needed *
                    </label>
                    <select
                      required
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all cursor-pointer shadow-inner"
                    >
                      <option value="">Select Service Category</option>
                      <option value="software">Software Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="iot">IoT Solutions</option>
                      <option value="embedded">Embedded Systems</option>
                      <option value="ai">AI & Data Solutions</option>
                      <option value="robotics">Robotics & Automation</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="font-sans text-xs text-slate-500 font-bold">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      id="details"
                      name="details"
                      value={formState.details}
                      onChange={handleChange}
                      placeholder="Outline your hardware specifications, logistics bottlenecks, stack goals, or target deadline estimates..."
                      className="bg-slate-50 border border-slate-200 focus:border-accent focus:outline-none rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 font-sans text-sm focus:shadow-[0_0_10px_rgba(0,113,227,0.08)] transition-all resize-none shadow-inner"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#0071e3] text-white font-sans font-semibold text-xs tracking-wide hover:bg-[#0058b0] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#0071e3]/5 border-2 border-[#0071e3] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#0071e3]" />
                </div>
                <h2 className="text-2xl font-sans font-bold text-slate-850 mb-2">
                  Request Transmitted
                </h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 font-sans leading-relaxed">
                  Your project data was successfully received. An engineer will analyze your parameters and connect within 12-24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      service: "",
                      details: ""
                    });
                    setSubmitSuccess(false);
                  }}
                  className="px-8 py-2.5 rounded-full bg-[#0071e3] text-white font-sans font-semibold text-xs hover:bg-[#0058b0] transition-all shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <Suspense fallback={
        <div className="min-h-[50vh] flex items-center justify-center font-sans text-xs text-slate-500">
          Loading contact module...
        </div>
      }>
        <ContactFormContent />
      </Suspense>
    </div>
  );
}
