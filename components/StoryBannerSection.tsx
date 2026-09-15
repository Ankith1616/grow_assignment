"use client";

import React from "react";
import Image from "next/image";

export default function StoryBannerSection() {
  return (
    <section className="relative py-28 sm:py-36 md:py-44 overflow-hidden flex items-center justify-center">
      {/* Background Image with subtle dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-coast.jpg"
          alt="Santa Monica Pacific coastline at serene sunrise"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft coastal maritime tint overlay */}
        <div className="absolute inset-0 bg-[#13262d]/55 backdrop-brightness-90" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <blockquote className="space-y-6">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light font-serif text-[#faf8f5] leading-[1.35] tracking-[0.01em]">
            “Therapy works best when you feel respected, understood, and actively
            involved in the process. My goal is not just symptom relief, but helping
            you develop insight, resilience, and a stronger relationship with yourself
            over time.”
          </p>
          <cite className="block text-[0.85rem] sm:text-[0.92rem] tracking-[0.18em] uppercase text-[#d9cbbe] font-light not-italic pt-2">
            — Dr. Maya Reynolds, PsyD • Licensed Clinical Psychologist
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
