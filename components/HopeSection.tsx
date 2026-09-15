"use client";

import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="bg-[#faf8f5] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Client Reality & Empathy Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-light text-[#1b363f] leading-[1.2] tracking-[-0.01em]">
              High-achieving on the outside—quietly overwhelmed on the inside.
            </h2>

            <p className="text-lg sm:text-xl font-serif italic text-[#c17c5f] leading-relaxed pt-1">
              At my Santa Monica practice, we make space to slow down, untangle
              overthinking, and find sustainable peace.
            </p>

            <p className="text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8]">
              Many of the adults I work with are thoughtful, successful, and deeply
              self-aware. But beneath the surface, you may be quietly struggling with
              constant worry, tension in your body, disrupted sleep, or an unending sense
              that you’re always bracing for the other shoe to drop.
            </p>

            <p className="text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8]">
              Others are navigating the lingering effects of earlier life experiences that
              continue to show up in your relationships, self-doubt, or difficulty feeling
              truly at ease in your daily life.
            </p>
          </div>

          {/* Right Column: Grounded Office Image & Approach Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-[4px] overflow-hidden shadow-xs border border-[#e7e2da]">
              <Image
                src="/images/office-2.jpg"
                alt="A quiet, private therapy room designed to feel calm and grounding in Santa Monica"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <p className="text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8]">
              First and foremost, I believe what you’re experiencing is real, valid, and worthy
              of supportive attention. My practice offers clients in Santa Monica and across
              California a structured yet gentle environment to understand both the emotional
              and physiological sides of what you’re carrying—so you can rediscover your
              footing and live with greater ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
