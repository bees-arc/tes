"use client";

import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw, AlertTriangle, HelpCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ReturnPolicy() {
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
            Return & Refund Policy
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
                Thank you for choosing <strong>TES Solutions</strong> (TES Solutions Systems Inc.). We value your business and are dedicated to providing the highest quality custom software development, embedded systems, IoT platforms, and robotics design.
              </p>
              <p>
                As we provide bespoke technological services, custom prototype fabrication, and digital products, our Return and Refund policies are designed to accommodate the specialized nature of our business. Please review the details below regarding returns, refunds, and cancellations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#0071e3]" />
                Returns of Hardware Components
              </h2>
              <p>
                We accept returns for <strong>standard, non-customized hardware components</strong> (such as off-the-shelf sensors, development boards, and standard cabling) within <strong>30 days</strong> from the date of delivery.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To be eligible for a return, the hardware item must be unused, unaltered, and in the same condition in which it was received.</li>
                <li>The item must be in its original packaging.</li>
                <li>Proof of purchase (invoice or receipt) must be provided.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#0071e3]" />
                Non-Returnable & Non-Refundable Items
              </h2>
              <p>
                Due to the customized nature of engineering, manufacturing, and software design services, the following items and services are strictly <strong>non-returnable and non-refundable</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Custom Hardware Prototypes:</strong> Custom-designed multi-layer PCBs, custom-molded mechatronic enclosures, and application-specific integrated hardware built to clients' specifications.</li>
                <li><strong>Bespoke Software & Firmware:</strong> Custom codebases, proprietary firmware, and web/mobile software configurations delivered to the client.</li>
                <li><strong>Professional Retainers & Consulting:</strong> Engineering consultation hours, systems analysis, and project planning fees once the work has commenced.</li>
                <li><strong>Digital License Subscriptions:</strong> Software platform user licenses and cloud telemetry backend hosting packages that have been activated.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#0071e3]" />
                Damaged or Defective Items
              </h2>
              <p>
                In the event that a custom hardware prototype or device arrives damaged or fails to operate due to a manufacturing defect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Please report the issue to our engineering support team within <strong>7 business days</strong> of receipt.</li>
                <li>We will inspect the failure logs and, if the defect is verified as a manufacturing error, we will build a replacement device or perform necessary repairs at no additional cost to you.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0071e3]" />
                Refund Processing
              </h2>
              <p>
                Once we receive your returned item and complete its inspection, we will notify you of the status of your refund. If your return is approved:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>A refund will be initiated to your original method of payment (such as the card used during the transaction via our secure payment gateway).</li>
                <li>Please note that the refund amount will exclude any initial shipping, handling, or import charges incurred during the purchase.</li>
                <li>Refunds are processed within <strong>7 business days</strong> of receiving the returned item. Processing times by your credit card issuer or bank may vary.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                Return Shipping
              </h2>
              <p>
                You will be responsible for paying the shipping costs for returning your item. Shipping costs are non-refundable. If the return is due to our packaging error or verified product defect, we will issue a prepaid shipping label.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1d1d1f]">
                Project Cancellation Terms
              </h2>
              <p>
                Either party may terminate an active software development or hardware engineering contract according to the terms specified in the individual project's Service Agreement. Refund amounts for milestones not yet completed are calculated based on the project roadmap and subject to approval.
              </p>
            </section>
          </div>

          {/* Quick info sidebar card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="apple-card bg-[#f5f5f7] p-6 border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Policy Summary
              </h3>
              <div className="space-y-4 font-sans text-xs text-slate-500">
                <div>
                  <span className="block font-bold text-slate-700">Standard Returns</span>
                  <span>30 Days (Unused in original packaging)</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Custom Work / Software</span>
                  <span>Strictly non-refundable</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Defects Coverage</span>
                  <span>7-day report window for replacement</span>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="block font-bold text-slate-700">Processing Speed</span>
                  <span>7 Business Days from receipt</span>
                </div>
              </div>
            </div>

            <div className="apple-card bg-white p-6 shadow-sm border border-slate-200/50 rounded-2xl">
              <h3 className="font-sans font-bold text-[#1d1d1f] text-sm mb-4">
                Support Channels
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
                    <span className="block text-slate-400">Headquarters</span>
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

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
