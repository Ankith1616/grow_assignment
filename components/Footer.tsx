"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const navigateLinks = [
    { label: "About Dr. Reynolds", href: "#about" },
    { label: "Areas of Focus", href: "#services" },
    { label: "Clinical Approach", href: "#approach" },
    { label: "Santa Monica Office", href: "#office" },
    { label: "Frequently Asked Questions", href: "#faqs" },
    { label: "Schedule Consultation", href: "#contact" },
  ];

  const specialties = [
    "Anxiety & Panic Therapy",
    "Trauma & EMDR Reprocessing",
    "Burnout & Perfectionism Support",
    "Cognitive Behavioral Therapy (CBT)",
    "Body-Oriented Somatic Work",
    "Entrepreneurs & Creatives",
  ];

  return (
    <footer className="w-full">
      {/* Upper Footer */}
      <div className="bg-[#ffffff] py-16 md:py-24 border-t border-[#e7e2da]">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
            {/* Column 1: Brand & Overview (Col 1-4) */}
            <div className="lg:col-span-4 flex flex-col space-y-5">
              <div>
                <h3 className="font-serif text-2xl text-[#1b363f] font-normal">
                  Dr. Maya Reynolds, PsyD
                </h3>
                <p className="text-[0.72rem] tracking-[0.16em] uppercase font-medium text-[#c17c5f] pt-1">
                  Licensed Clinical Psychologist
                </p>
              </div>

              <p className="text-[#526065] font-light text-[0.95rem] leading-[1.8] max-w-sm">
                Providing thoughtful, evidence-based psychotherapy for adults feeling
                overwhelmed by anxiety, trauma, and burnout. Warm in-person care in Santa
                Monica and secure telehealth across California.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#526065] font-light">
                <ShieldCheck className="w-4 h-4 text-[#7b9e89]" />
                <span>HIPAA-Compliant &amp; Confidential Practice</span>
              </div>
            </div>

            {/* Column 2: Navigation (Col 5-6) */}
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <h4 className="text-[0.82rem] tracking-[0.16em] uppercase font-medium text-[#1b363f]">
                Explore
              </h4>
              <ul className="space-y-3 pt-1">
                {navigateLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.92rem] text-[#526065] hover:text-[#c17c5f] font-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Clinical Focus (Col 7-9) */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <h4 className="text-[0.82rem] tracking-[0.16em] uppercase font-medium text-[#1b363f]">
                Specialties
              </h4>
              <ul className="space-y-2.5 pt-1">
                {specialties.map((item) => (
                  <li
                    key={item}
                    className="text-[0.92rem] text-[#526065] font-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Location & Contact (Col 10-12) */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <h4 className="text-[0.82rem] tracking-[0.16em] uppercase font-medium text-[#1b363f]">
                Location &amp; Care
              </h4>
              <div className="text-[0.92rem] text-[#526065] font-light space-y-3 pt-1 leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c17c5f] shrink-0 mt-1" />
                  <span>
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c17c5f] shrink-0" />
                  <a
                    href="mailto:contact@mayareynoldspsyd.com"
                    className="hover:text-[#c17c5f] transition-colors"
                  >
                    contact@mayareynoldspsyd.com
                  </a>
                </p>
                <p className="text-[0.82rem] text-[#78888e] pt-2 italic">
                  Serving Santa Monica, Venice, Brentwood, Pacific Palisades, West Los
                  Angeles, and statewide California via secure telehealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Subfooter */}
      <div className="bg-[#13262d] text-[#faf8f5] py-6 border-t border-black/20">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.06em] font-light text-[#a3b3b8]">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link href="#contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="opacity-40">•</span>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link href="#contact" className="hover:text-white transition-colors">
              Good Faith Estimate
            </Link>
            <span className="opacity-40">•</span>
            <span>California Board of Psychology Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
