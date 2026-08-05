"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, RefreshCw, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full overflow-hidden bg-background pt-32 pb-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#86868b] hover:text-[#0071e3] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Title / Header */}
        <div className="border-b border-slate-100 pb-8 mb-12">
          <span className="font-sans text-xs text-[#86868b] tracking-wider uppercase block mb-3 font-semibold">
            Legal & Privacy
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-sans font-medium">
            LAST UPDATED: AUGUST 4, 2026
          </p>
        </div>

        {/* Layout: Main content & summary sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Policy Text */}
          <div className="lg:col-span-8 space-y-8 text-sm text-slate-600 leading-relaxed font-sans">
            <section>
              <p className="mb-4">
                At <strong>TES Solutions</strong> (TES Solutions Systems Inc., accessible at <a href="https://tessolutions.lk" className="text-[#0071e3] hover:underline">https://tessolutions.lk</a>), we are deeply committed to protecting the privacy, security, and confidentiality of our clients' and visitors' personal and business information.
              </p>
              <p>
                This Privacy Policy outlines how we collect, use, process, and safeguard your data when you visit our website, submit requests through our engineering portals, purchase components, or interact with our software platforms and services. By using our website or engaging our services, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#0071e3]" />
                Information We Collect
              </h2>
              <p>
                We may collect various types of information from you in the course of providing our services and operating our website:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personal and Contact Details:</strong> Name, business email address, phone number, company name, and job title, provided voluntarily by you when filling out contact forms, requesting project estimates, or registering an account.
                </li>
                <li>
                  <strong>Project and Technical Specifications:</strong> Engineering blueprints, system requirements, source code, data logs, and device configurations shared during client consultations.
                </li>
                <li>
                  <strong>Payment and Billing Information:</strong> For processing transactions (such as platform licenses, service retainers, or hardware components), payments are securely processed through trusted, PCI-DSS compliant third-party payment gateways (like PayHere). <strong>TES Solutions does not store, access, or record full credit/debit card numbers or sensitive payment details.</strong>
                </li>
                <li>
                  <strong>Usage and Technical Data:</strong> IP addresses, browser types, operating systems, referring URLs, device telemetry, and interaction metrics collected automatically via cookies and tracking technologies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0071e3]" />
                How We Use Your Information
              </h2>
              <p>
                The information we collect is utilized for the following core business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To develop, test, manufacture, and deliver custom hardware, embedded firmware, software platforms, and robotics systems.</li>
                <li>To communicate with you regarding active projects, technical inquiries, quotes, and customer support.</li>
                <li>To manage and process payments, invoices, and subscription billings.</li>
                <li>To improve website performance, test system capabilities, and optimize user experience.</li>
                <li>To comply with regulatory standards, protect our IP, and prevent fraudulent actions or security breaches.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#0071e3]" />
                Information Sharing & Third-Party Disclosure
              </h2>
              <p>
                We respect your privacy and do not sell, trade, rent, or lease your personal information to third parties. We share data only under the following strict conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We work with trusted partners who assist in processing secure payments (e.g., PayHere), providing hosting infrastructure (e.g., Vercel, AWS), and handling logistics/courier shipping for physical hardware prototypes. These providers are bound by strict NDA and confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required to do so by applicable law, court orders, or requests from regulatory authorities.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                Data Security Measures
              </h2>
              <p>
                We implement industry-standard administrative, physical, and electronic security safeguards, including SSL/TLS encryption, firewall systems, and restricted database access controls. However, please be aware that no transmission method over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                Cookies and Analytics
              </h2>
              <p>
                Our website utilizes cookies and similar tracking mechanisms to keep track of sessions, analyze user traffic patterns, and provide personalized interfaces. You may disable cookies through your browser settings, though doing so may affect some functionalities of our digital platforms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#0071e3]" />
                Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with a revised last-updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>
          </div>

          {/* Quick info sidebar card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="apple-card bg-[#f5f5f7] p-6 border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Privacy Overview
              </h3>
              <div className="space-y-4 font-sans text-xs text-slate-500">
                <div>
                  <span className="block font-bold text-slate-700">PCI Compliance</span>
                  <span>Payments processed via secure PCI-DSS gateway. No card details stored.</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Data Sharing</span>
                  <span>No selling or renting. Shared only with trusted service operators.</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Security Protocols</span>
                  <span>SSL/TLS encryption, restricted access controls.</span>
                </div>
              </div>
            </div>

            <div className="apple-card bg-white p-6 shadow-sm border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Operations Contact
              </h3>
              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Email</span>
                    <a href="mailto:operations@tes-solutions.sys" className="text-slate-800 hover:underline font-semibold">
                      operations@tes-solutions.sys
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Phone</span>
                    <a href="tel:+6567890123" className="text-slate-800 hover:underline font-semibold">
                      +65 6789 0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-[#0071e3] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Address</span>
                    <p className="text-slate-800 font-semibold leading-tight">
                      100 High Street, Level 28,<br />
                      Singapore 179434
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
