"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutBioSection() {
  const highlights = [
    "PsyD in Clinical Psychology, Licensed in California",
    "Evidence-based integration of CBT, EMDR, and Somatic practices",
    "Specialized in high-functioning anxiety, panic, and burnout",
    "Safe, carefully paced trauma processing and nervous system regulation",
    "In-person sessions in Santa Monica & secure statewide California telehealth",
  ];

  return (
    <section id="about" className="bg-[#faf8f5] py-20 md:py-28 lg:py-32 border-t border-[#e7e2da]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dr. Maya Reynolds Portrait with aesthetic framing */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-3/4 rounded-t-[140px] rounded-b-[10px] overflow-hidden shadow-md border-4 border-white">
              <Image
                src="/images/maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-serif text-2xl text-[#1b363f]">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p className="text-[0.78rem] tracking-[0.16em] uppercase text-[#c17c5f] font-medium pt-1">
                Licensed Clinical Psychologist
              </p>
            </div>
          </div>

          {/* Right Column: Bio Copy Derived from Profile */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c17c5f]" />
              <p className="text-[0.75rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f]">
                About My Practice
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-light text-[#1b363f] leading-[1.22] tracking-[-0.01em]">
              A warm, collaborative, and grounded approach to psychological healing.
            </h2>

            <div className="space-y-4 text-[#526065] font-light text-base sm:text-[1.02rem] leading-[1.8]">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California,
                offering therapy for adults who feel overwhelmed by anxiety, stress, or the
                lingering effects of past experiences. Many of the people I work with are
                high-achieving, thoughtful, and self-aware—but internally feel exhausted,
                stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                Sessions with me are structured enough to feel supportive and purposeful,
                while still leaving plenty of space for reflection and depth. I integrate
                evidence-based methods—including Cognitive-Behavioral Therapy (CBT), EMDR,
                mindfulness-based practices, and body-oriented somatic techniques—to help you
                understand both the emotional and physiological sides of what you’re
                experiencing.
              </p>
              <p>
                Whether we are addressing single-incident or complex developmental trauma,
                or untangling years of professional burnout and perfectionism, my work is
                paced carefully with an emphasis on safety, stabilization, and daily nervous
                system regulation.
              </p>
            </div>

            {/* Quick Practice Highlights */}
            <div className="pt-2 grid grid-cols-1 gap-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c17c5f] shrink-0 mt-1" />
                  <span className="text-sm sm:text-[0.92rem] text-[#1b363f] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link href="#contact" className="btn-pill-terracotta text-xs sm:text-sm">
                Schedule a Consultation
              </Link>
              <Link href="#faqs" className="btn-underline text-xs sm:text-sm">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
