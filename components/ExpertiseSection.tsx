"use client";

import React from "react";
import Link from "next/link";

export default function ExpertiseSection() {
  const column1 = [
    { label: "High-Functioning Anxiety", href: "#services" },
    { label: "Panic & Somatic Tension", href: "#services" },
    { label: "EMDR Trauma Therapy", href: "#services" },
    { label: "Cognitive-Behavioral Therapy (CBT)", href: "#approach" },
    { label: "Single-Incident & Complex Trauma", href: "#services" },
    { label: "Childhood & Developmental Patterns", href: "#services" },
  ];

  const column2 = [
    { label: "Professional Burnout", href: "#services" },
    { label: "Perfectionism & Overthinking", href: "#services" },
    { label: "Mindfulness-Based Stress Reduction", href: "#approach" },
    { label: "Body-Oriented & Somatic Regulation", href: "#approach" },
    { label: "Entrepreneurs & Creative Professionals", href: "#services" },
    { label: "…and collaborative depth work.", href: null },
  ];

  return (
    <section id="approach" className="bg-[#ffffff] py-20 md:py-28 border-t border-[#e7e2da]">
      <div className="max-w-[1350px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-light text-[#1b363f] leading-[1.25] tracking-[-0.01em]">
              Specialized methods &amp; areas of{" "}
              <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-[4rem] font-normal lowercase inline-block ml-1">
                expertise
              </span>
            </h2>
            <p className="text-[#526065] font-light text-[0.95rem] leading-relaxed mt-4">
              Integrating practical tools for symptom relief with depth-oriented work to understand
              both the emotional and physiological roots of distress.
            </p>
          </div>

          {/* Right: Two columns of items with horizontal dividing lines */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {/* Column 1 */}
            <div className="flex flex-col">
              {column1.map((item) => (
                <div
                  key={item.label}
                  className="py-4 border-b border-[#e7e2da] flex items-center justify-between"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-[0.88rem] tracking-[0.14em] uppercase text-[#1b363f] hover:text-[#c17c5f] transition-colors font-normal"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[0.88rem] tracking-[0.14em] uppercase text-[#1b363f] font-normal">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {column2.map((item) => (
                <div
                  key={item.label}
                  className="py-4 border-b border-[#e7e2da] flex items-center justify-between"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-[0.88rem] tracking-[0.14em] uppercase text-[#1b363f] hover:text-[#c17c5f] transition-colors font-normal"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[0.88rem] tracking-[0.14em] uppercase text-[#1b363f] font-normal">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
