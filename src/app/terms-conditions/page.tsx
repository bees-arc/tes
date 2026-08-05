"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, UserCheck, ShieldAlert, Award, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
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
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#1d1d1f] mb-4">
            Terms & Conditions
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
                Welcome to <strong>TES Solutions</strong> (TES Solutions Systems Inc., accessible at <a href="https://tessolutions.lk" className="text-[#0071e3] hover:underline">https://tessolutions.lk</a>). These Terms and Conditions govern your access to and use of our website, engineering portals, and the purchase and licensing of custom software, hardware prototypes, embedded systems, and consulting services.
              </p>
              <p>
                By accessing, browsing, or using our website, or by requesting services through our platform, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before proceeding with any transaction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0071e3]" />
                1. Use of the Website
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Age Requirement:</strong> You must be at least <strong>18 years of age</strong> to use our website, request quotes, or authorize service payments.
                </li>
                <li>
                  <strong>Account Security:</strong> If you are provided with credentials for client dashboards or engineering databases, you are responsible for maintaining the confidentiality of your account information.
                </li>
                <li>
                  <strong>Accuracy of Data:</strong> You agree to provide accurate, complete, and current information when submitting forms or executing payments.
                </li>
                <li>
                  <strong>Prohibited Use:</strong> You may not use our website or services for unlawful activities, or transmit malware, keyloggers, or unauthorized scripts.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#0071e3]" />
                2. Product Information and B2B Contracts
              </h2>
              <p>
                TES Solutions primarily delivers custom-engineered B2B technological systems. While we make every effort to display accurate specifications, descriptions, and pricing on our site:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Formal software development and hardware engineering deliverables are governed by customized, signed <strong>Statements of Work (SOWs)</strong> or Service Agreements.</li>
                <li>Any general packages, telemetry subscriptions, or kit listings displayed on this website are estimates and subject to change without notice.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0071e3]" />
                3. Intellectual Property Rights
              </h2>
              <p>
                All materials published on this website (including but not limited to design layouts, graphics, documentation, software, source code, PCB schema previews, and logos) are the intellectual property of <strong>TES Solutions Systems Inc.</strong> or its licensors:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You are granted a limited, non-transferable license to access website content for evaluation purposes.</li>
                <li>You may not reproduce, distribute, modify, or reverse-engineer any proprietary hardware designs or codebases shown on our site without our prior written consent.</li>
                <li>Ownership of specific project deliverables (e.g., custom source code, PCB manufacturing files) will transfer to the client upon full payment, as defined in individual SOW agreements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                4. Orders and Secure Payments
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Order Acceptance:</strong> We reserve the right to refuse or cancel any order or request for services for reasons including product availability, technical complexity, pricing errors, or suspected fraudulent activity.
                </li>
                <li>
                  <strong>Secure Gateway:</strong> We utilize secure, PCI-compliant third-party payment processors (such as PayHere) to handle all online card payments. TES Solutions does not collect or store full credit card details. By submitting a payment, you authorize our processing partner to charge the specified fee.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                5. Shipping and Telemetry Activations
              </h2>
              <p>
                Physical custom hardware units and components are shipped via secure logistics partners. Estimated shipping times are guidelines only and may vary based on carrier speed and customs clearance. Digital cloud telemetry and platform accesses will be activated within 24 hours of successful payment confirmation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#0071e3]" />
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, in no event shall <strong>TES Solutions Systems Inc.</strong>, its directors, employees, or engineering partners be liable for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Any indirect, incidental, special, or consequential damages (including loss of profits, telemetry data, or business interruptions) arising out of your use or inability to use our systems.</li>
                <li>Warranties of merchantability or fitness for a particular purpose, beyond the SLAs specified in signed client agreements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#0071e3]" />
                7. Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdictions in which TES Solutions operates. Any legal disputes arising out of these terms shall be settled in the competent courts of those jurisdictions.
              </p>
            </section>
          </div>

          {/* Quick info sidebar card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="apple-card bg-[#f5f5f7] p-6 border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Terms Summary
              </h3>
              <div className="space-y-4 font-sans text-xs text-slate-500">
                <div>
                  <span className="block font-bold text-slate-700">Contract Priority</span>
                  <span>Specific Statements of Work (SOWs) supersede these website terms.</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Intellectual Property</span>
                  <span>All firmware, software, and design structures are protected.</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Payment Responsibility</span>
                  <span>Charges handled via secure external processors (e.g., PayHere).</span>
                </div>
              </div>
            </div>

            <div className="apple-card bg-white p-6 shadow-sm border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Legal Desk
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
