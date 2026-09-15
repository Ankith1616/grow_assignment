"use client";

import React from "react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Trauma",
      href: "/trauma-counseling-newbury-park",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    },
    {
      title: "Dissociation",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    },
    {
      title: "EMDR",
      href: "/emdr-therapy-newbury-park",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
      title: "Special Needs Parenting",
      href: "/counseling-special-needs-parents-newbury-park",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32 border-t border-[#ede7dc]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-light text-[#2b2b2b] leading-[1.25] tracking-[-0.01em]">
              Our{" "}
              <span className="font-script text-[#86b3b3] text-5xl sm:text-6xl md:text-[4.2rem] font-normal lowercase inline-block ml-1">
                specialties
              </span>{" "}
              include…
            </h2>
          </div>

          {/* Right Column: 2x2 Grid of Specialty Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col space-y-4">
                <h3 className="text-2xl sm:text-[1.65rem] font-serif font-normal text-[#2b2b2b]">
                  {item.title}
                </h3>
                <p className="text-[#515151] font-light text-[0.98rem] leading-[1.78]">
                  {item.description}
                </p>
                <div className="pt-2">
                  <Link href={item.href} className="btn-underline text-xs">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
