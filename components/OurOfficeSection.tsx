"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sun, Shield, HeartHandshake, Laptop, Sparkles } from "lucide-react";

export default function OurOfficeSection() {
  const officeFeatures = [
    {
      icon: <Sun className="w-5 h-5 text-[#c17c5f]" />,
      title: "Natural Light & Uncluttered Calm",
      description:
        "Designed to feel warm, open, and grounding. Soft coastal California sunlight, organic textiles, and an uncluttered setting help regulate an overstimulated nervous system the moment you step through the door.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#c17c5f]" />,
      title: "Complete Privacy & Discretion",
      description:
        "Your emotional safety is paramount. Our office provides a peaceful, sound-insulated retreat with discreet access—ensuring a confidential haven away from the pace of daily life.",
    },
    {
      icon: <Laptop className="w-5 h-5 text-[#c17c5f]" />,
      title: "In-Person & Hybrid Flexibility",
      description:
        "Come into our quiet Santa Monica suite for in-person therapy, or transition smoothly to secure, HIPAA-compliant telehealth when traveling or balancing a demanding schedule anywhere in California.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#c17c5f]" />,
      title: "A Grounded Atmosphere",
      description:
        "Clients frequently share that the space itself helps them exhale. From comfortable seating to thoughtful sensory elements, every detail supports your journey toward ease and reflection.",
    },
  ];

  return (
    <section
      id="office"
      className="bg-[#faf8f5] py-20 md:py-28 lg:py-32 border-t border-[#e7e2da] overflow-hidden"
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white border border-[#e7e2da] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c17c5f]" />
            <p className="text-[0.72rem] sm:text-[0.76rem] tracking-[0.18em] uppercase font-medium text-[#1b363f]">
              Our Physical Practice Space
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-light text-[#1b363f] leading-[1.2] tracking-[-0.01em]">
            A quiet sanctuary designed for comfort &amp;{" "}
            <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-[4rem] font-normal lowercase inline-block ml-1">
              healing
            </span>
          </h2>

          <p className="text-[#526065] font-light text-base sm:text-[1.05rem] mt-5 leading-relaxed">
            Located in the heart of Santa Monica, California, our office is an intentional,
            private space created for adults seeking relief from anxiety, trauma, and
            chronic stress.
          </p>
        </div>

        {/* Multi-Image Gallery Layout (Taken directly from Dr. Maya Reynolds' profile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 lg:mb-20">
          {/* Main Large Arched Office Photograph */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[420px] rounded-t-[100px] rounded-b-[8px] overflow-hidden shadow-sm border border-white bg-white group">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds private therapy room in Santa Monica with natural light"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[0.72rem] tracking-[0.16em] uppercase font-medium text-[#f3efeb] bg-[#1b363f]/80 backdrop-blur-xs px-3 py-1 rounded-full inline-block mb-2">
                  Santa Monica Suite
                </span>
                <p className="text-sm sm:text-base font-light text-[#faf8f5]">
                  “A quiet, private space with natural light and an uncluttered environment.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Detail Office Photos */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Image 2: Comfortable Grounding Seating Area */}
            <div className="relative w-full h-[220px] sm:h-[260px] rounded-t-[60px] rounded-b-[8px] overflow-hidden shadow-sm border border-white bg-white group">
              <Image
                src="/images/office-2.jpg"
                alt="Comfortable therapy seating and peaceful plants at Santa Monica office"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-[0.68rem] tracking-[0.14em] uppercase font-medium text-white bg-[#1b363f]/80 backdrop-blur-xs px-2.5 py-1 rounded-full">
                  Comfortable &amp; Supportive Seating
                </span>
              </div>
            </div>

            {/* Image 3: Restorative Detail & Mindful Setting */}
            <div className="relative w-full h-[220px] sm:h-[260px] rounded-t-[60px] rounded-b-[8px] overflow-hidden shadow-sm border border-white bg-white group">
              <Image
                src="/images/service-anxiety.jpg"
                alt="Quiet mindful atmosphere with natural materials and coastal breeze"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-[0.68rem] tracking-[0.14em] uppercase font-medium text-white bg-[#1b363f]/80 backdrop-blur-xs px-2.5 py-1 rounded-full">
                  Calming Sensory Elements
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {officeFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-white p-7 rounded-sm border border-[#e7e2da] shadow-2xs flex flex-col justify-between hover:border-[#c17c5f]/50 transition-colors duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#faf8f5] flex items-center justify-center mb-5 border border-[#e7e2da]">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1b363f] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-[#526065] font-light text-[0.92rem] leading-[1.75]">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Card & CTA Banner */}
        <div className="bg-[#1b363f] text-[#faf8f5] rounded-sm p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="p-4 rounded-full bg-[#23424d] text-[#c17c5f] shrink-0 border border-white/10">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[#d9cbbe] font-medium block mb-1">
                Office Location
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                123th Street 45 W, Santa Monica, CA 90401
              </h4>
              <p className="text-sm font-light text-[#b2c2c7] pt-1">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, and all of
                California via secure video.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link
              href="#contact"
              className="btn-pill-terracotta w-full sm:w-auto text-center text-xs sm:text-sm py-3.5 px-8"
            >
              Book In-Person Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
