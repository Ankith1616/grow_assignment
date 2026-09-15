"use client";

import React from "react";
import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="bg-[#ffffff] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Featured Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-[4px] overflow-hidden shadow-xs">
              <Image
                src="/images/sec7-honoring.jpg"
                alt="Therapy space interior with serene aesthetic"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Asymmetric Statement Heading */}
          <div className="lg:col-span-5 flex flex-col justify-center px-2 lg:px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-light text-[#2b2b2b] leading-[1.25] tracking-[-0.01em]">
              Honoring where you’ve been{" "}
              <span className="font-script text-[#86b3b3] text-5xl sm:text-6xl md:text-7xl font-normal inline-block ml-1 mr-1">
                &amp;
              </span>{" "}
              helping shape where you’re headed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
