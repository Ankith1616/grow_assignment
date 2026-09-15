"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#f3efeb] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Approach Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className="text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f]">
              Therapeutic Approach
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-[2.85rem] font-light text-[#1b363f] leading-[1.2] tracking-[-0.01em]">
              Structured support with space for reflection and depth.
            </h2>

            <p className="text-lg sm:text-xl font-serif italic text-[#1b363f] leading-relaxed pt-1">
              Sessions are designed to help you understand both the emotional and
              physiological sides of what you’re experiencing.
            </p>

            <div className="space-y-4 text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8]">
              <p>
                My clients are often used to relying on intellectualization and
                problem-solving to cope with distress. While insight is valuable, genuine
                healing requires more than just analyzing what hurts. We take an integrative,
                body-informed approach that honors the physical signals of anxiety, stress,
                and trauma held within your nervous system.
              </p>
              <p>
                By blending evidence-based modalities—including Cognitive Behavioral Therapy
                (CBT), EMDR, mindfulness practices, and somatic tools—we work collaboratively
                to help you develop emotional flexibility, process painful earlier
                experiences, and cultivate sustainable rhythms for your professional and
                personal life.
              </p>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="btn-underline text-xs sm:text-sm">
                Schedule an Initial Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Office Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-md mx-auto aspect-3/4 rounded-t-[120px] overflow-hidden shadow-sm border border-white/60">
              <Image
                src="/images/office-1.jpg"
                alt="Calm, uncluttered Santa Monica therapy office with natural light"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
