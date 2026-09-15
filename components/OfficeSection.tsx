"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Video, Sparkles, Clock } from "lucide-react";

export default function OfficeSection() {
  return (
    <section id="office" className="bg-[#ffffff] py-20 md:py-28 lg:py-32 border-t border-[#e7e2da]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f] mb-3">
            In-Person &amp; Virtual Care
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b363f] tracking-[-0.01em]">
            A space designed for calm &amp;{" "}
            <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-7xl font-normal lowercase inline-block ml-1">
              grounding
            </span>
          </h2>
          <p className="text-[#526065] font-light text-base mt-4 leading-relaxed">
            Conveniently located in Santa Monica, California with comprehensive statewide
            telehealth options.
          </p>
        </div>

        {/* Dual Card Layout: In-Person Office + California Telehealth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Office Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
              <div className="relative w-full aspect-4/5 rounded-t-[80px] rounded-b-[6px] overflow-hidden shadow-xs border border-[#e7e2da]">
                <Image
                  src="/images/office-1.jpg"
                  alt="Santa Monica therapy office natural light and uncluttered design"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs tracking-[0.12em] uppercase text-[#526065] text-center font-light">
                Private, light-filled consultation space
              </p>
            </div>

            <div className="flex flex-col space-y-3 sm:pt-8">
              <div className="relative w-full aspect-4/5 rounded-t-[80px] rounded-b-[6px] overflow-hidden shadow-xs border border-[#e7e2da]">
                <Image
                  src="/images/office-2.jpg"
                  alt="Comfortable, grounding seating area at Santa Monica therapy practice"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs tracking-[0.12em] uppercase text-[#526065] text-center font-light">
                Grounding &amp; uncluttered setting
              </p>
            </div>
          </div>

          {/* Right Column: Information & Features */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* In-Person Box */}
            <div className="bg-[#faf8f5] p-8 rounded-sm border border-[#e7e2da] shadow-2xs space-y-3">
              <div className="flex items-center gap-3 text-[#1b363f]">
                <div className="p-2.5 rounded-full bg-[#f3efeb] text-[#c17c5f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium">Santa Monica Office</h3>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#526065]">
                    In-Person Therapy
                  </p>
                </div>
              </div>
              <p className="text-[#526065] font-light text-sm leading-relaxed pt-2">
                <strong>Address:</strong> 123th Street 45 W, Santa Monica, CA 90401.
              </p>
              <p className="text-[#526065] font-light text-sm leading-relaxed">
                A quiet, private suite designed to feel calm and grounding, with natural
                light and an uncluttered environment. Clients often share that the space
                itself helps them feel more at ease when they arrive.
              </p>
            </div>

            {/* Telehealth Box */}
            <div className="bg-[#faf8f5] p-8 rounded-sm border border-[#e7e2da] shadow-2xs space-y-3">
              <div className="flex items-center gap-3 text-[#1b363f]">
                <div className="p-2.5 rounded-full bg-[#f3efeb] text-[#c17c5f]">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium">California Telehealth</h3>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#526065]">
                    Secure Video Therapy
                  </p>
                </div>
              </div>
              <p className="text-[#526065] font-light text-sm leading-relaxed pt-2">
                Available to adults located anywhere across the state of California.
                Sessions are conducted via a confidential, HIPAA-compliant video platform,
                making consistent psychological care accessible for busy schedules and
                frequent travel.
              </p>
            </div>

            <div>
              <Link href="#contact" className="btn-pill-terracotta text-xs sm:text-sm">
                Inquire About Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
