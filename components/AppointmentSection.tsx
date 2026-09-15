"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section
      id="contact"
      className="bg-[#f3efeb] py-20 md:py-28 lg:py-32 overflow-hidden border-t border-[#e7e2da]"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Decorative Image */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative w-full aspect-3/4 rounded-t-[100px] overflow-hidden shadow-xs border border-white/60">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds serene therapy space in Santa Monica CA"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Center Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-6">
            <p className="text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f] mb-4">
              Schedule an Initial Consultation
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b363f] leading-[1.22] tracking-[-0.01em] mb-6">
              Begin your path toward sustainable calm &amp;{" "}
              <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-7xl font-normal lowercase inline-block ml-1">
                clarity
              </span>
              .
            </h2>

            <p className="text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8] max-w-xl mb-6">
              Coming to therapy is a courageous and intentional decision. If you are
              seeking a psychologist who combines practical tools with depth-oriented
              healing—and who understands the realities of high internal pressure—I welcome
              you to connect.
            </p>

            <p className="text-[#526065] font-light text-sm sm:text-base mb-8">
              Offering in-person appointments in Santa Monica and secure telehealth
              throughout California.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a
                href="mailto:contact@mayareynoldspsyd.com"
                className="btn-pill-terracotta text-xs sm:text-sm"
              >
                Inquire for Availability
              </a>
              <Link href="#faqs" className="btn-underline text-xs sm:text-sm">
                Common Questions
              </Link>
            </div>

            {/* Quick Practice Details */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#526065] pt-4 border-t border-[#e7e2da] w-full max-w-md">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c17c5f]" />
                123th Street 45 W, Santa Monica, CA
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#c17c5f]" />
                In-Person &amp; Telehealth CA
              </span>
            </div>
          </div>

          {/* Right Decorative Image */}
          <div className="lg:col-span-3">
            <div className="relative w-full max-w-sm mx-auto aspect-3/4 rounded-t-[100px] overflow-hidden shadow-xs border border-white/60">
              <Image
                src="/images/service-burnout.jpg"
                alt="Quiet morning reflection for high-achieving professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
