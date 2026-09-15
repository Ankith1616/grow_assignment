"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#f3efeb] py-16 md:py-24 lg:py-28 overflow-hidden relative border-b border-[#e7e2da]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left: Office Interior Frame */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative w-full aspect-3/4 rounded-t-[100px] rounded-b-none overflow-hidden shadow-sm border border-white/60">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds serene therapy office in Santa Monica CA"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="text-center text-[0.72rem] tracking-[0.14em] uppercase text-[#526065] pt-3 font-light">
              Santa Monica Office Space
            </p>
          </div>

          {/* Center Copy Block */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3.5 py-1 rounded-full bg-white/70 border border-[#e7e2da] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c17c5f]" />
              <p className="text-[0.72rem] sm:text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#1b363f]">
                Licensed Clinical Psychologist • Santa Monica, CA
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-light leading-[1.18] text-[#1b363f] tracking-[-0.01em] mb-6">
              Thoughtful, grounded therapy to quiet the noise and finally{" "}
              <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-7xl font-normal lowercase inline-block ml-1 mr-1 transform -rotate-1">
                breathe
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg md:text-[1.05rem] text-[#526065] font-light max-w-xl leading-relaxed mb-8 md:mb-10">
              Specialized care for high-achieving adults navigating anxiety, panic,
              trauma, and burnout. In-person therapy in Santa Monica and secure telehealth
              throughout California.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="#contact" className="btn-pill-terracotta text-xs sm:text-sm">
                Schedule a Consultation
              </Link>
              <Link href="#about" className="btn-underline text-xs sm:text-sm">
                Meet Dr. Reynolds
              </Link>
            </div>
          </div>

          {/* Right: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-3">
            <div className="relative w-full max-w-sm mx-auto aspect-3/4 rounded-t-[100px] overflow-hidden shadow-sm border border-white/60">
              <Image
                src="/images/maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <p className="text-center text-[0.72rem] tracking-[0.14em] uppercase text-[#526065] pt-3 font-light">
              Dr. Maya Reynolds, PsyD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
