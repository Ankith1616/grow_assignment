"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeHelpSection() {
  const services = [
    {
      title: "Anxiety & Panic Therapy",
      href: "#contact",
      image: "/images/service-anxiety.jpg",
      alt: "Mindful, serene interior in Santa Monica for anxiety relief",
      subtitle: "Calming the Mind & Nervous System",
      description:
        "For thoughtful adults trapped in overthinking, constant worry, panic sensations, and physical tension. We combine practical Cognitive-Behavioral Therapy (CBT) with body-oriented mindfulness to untangle anxious thoughts and restore physiological calm.",
    },
    {
      title: "Trauma & EMDR Therapy",
      href: "#contact",
      image: "/images/service-trauma.jpg",
      alt: "Grounding and restorative trauma therapy space in Santa Monica",
      subtitle: "Carefully Paced & Stabilization-Centered",
      description:
        "Specialized care for single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic stress. Paced gently with EMDR and somatic regulation to heal how painful memories are held in your mind and body.",
    },
    {
      title: "Burnout & High-Achiever Support",
      href: "#contact",
      image: "/images/service-burnout.jpg",
      alt: "Quiet morning reflection and sustainable living for professionals",
      subtitle: "For Entrepreneurs, Creatives & Professionals",
      description:
        "For high-performing individuals feeling disconnected, exhausted, and burdened by relentless perfectionism. Therapy becomes a protected space to deconstruct unsustainable pressure, reconnect with yourself, and create healthier ways of working.",
    },
  ];

  return (
    <section id="services" className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <p className="text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f] mb-3">
            Clinical Services &amp; Specialties
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b363f] tracking-[-0.01em]">
            Three core areas of{" "}
            <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-7xl font-normal lowercase inline-block ml-1">
              focus
            </span>
          </h2>
          <p className="text-[#526065] font-light text-base mt-4 leading-relaxed">
            Evidence-based, collaborative psychological care tailored for adults in Santa Monica
            and across California.
          </p>
        </div>

        {/* 3 Column Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col group">
              {/* Arched Image Container */}
              <div className="relative w-full aspect-3/4 rounded-t-[100px] overflow-hidden bg-[#faf8f5] mb-8 shadow-xs border border-[#e7e2da]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Information */}
              <div className="flex flex-col space-y-3 px-1">
                <p className="text-[0.72rem] tracking-[0.16em] uppercase text-[#c17c5f] font-medium">
                  {service.subtitle}
                </p>
                <h3 className="text-2xl sm:text-[1.65rem] font-serif font-normal text-[#1b363f]">
                  <Link
                    href={service.href}
                    className="hover:text-[#c17c5f] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-[#526065] font-light text-[0.98rem] leading-[1.78]">
                  {service.description}
                </p>
                <div className="pt-2">
                  <Link href={service.href} className="btn-underline text-xs">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
