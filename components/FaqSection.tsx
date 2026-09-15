"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who do you typically work with in your practice?",
      answer:
        "I specialize in working with adults who feel overwhelmed by anxiety, chronic stress, trauma, or burnout. Many of my clients are high-achieving, thoughtful, and self-aware—frequently appearing 'functional' and composed on the outside while internally feeling exhausted, stuck in relentless overthinking, or emotionally on edge.",
    },
    {
      question: "What is your therapeutic approach and methodology?",
      answer:
        "I take a warm, collaborative, and grounded approach. Sessions are structured enough to provide direction and practical tools, while leaving room for deep emotional reflection. I integrate evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness practices, and body-oriented somatic techniques to address both the cognitive and physiological sides of distress.",
    },
    {
      question: "Do you offer in-person sessions, online therapy, or both?",
      answer:
        "I offer both options. In-person therapy takes place in my quiet, private office located at 123th Street 45 W in Santa Monica, CA 90401, designed with natural light and an uncluttered atmosphere. I also provide secure, HIPAA-compliant telehealth sessions for clients residing anywhere in the state of California.",
    },
    {
      question: "How do you approach trauma therapy and EMDR?",
      answer:
        "Trauma work in my practice is paced carefully, keeping safety and stabilization at the center. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns stemming from childhood or chronic stress. EMDR and somatic tools help rework how distressing memories are stored so you feel more regulated in daily life, not just during therapy hours.",
    },
    {
      question: "How do you help high-achieving professionals and entrepreneurs with burnout?",
      answer:
        "Living and working in demanding environments often leads professionals to push through chronic stress until exhaustion sets in. In therapy, we examine the roots of perfectionism and high internal pressure, helping you slow down, untangle self-worth from productivity, and develop sustainable rhythms of living and working.",
    },
    {
      question: "What does the initial consultation process look like?",
      answer:
        "I offer an initial consultation so we can briefly discuss what brings you to therapy, explore your current goals, and answer any questions you have about my approach. This ensures we are a thoughtful, aligned fit before beginning regular clinical sessions.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#faf8f5] py-20 md:py-28 lg:py-32 border-t border-[#e7e2da]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-[0.78rem] tracking-[0.18em] uppercase font-medium text-[#c17c5f] mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b363f] tracking-[-0.01em]">
            Frequently asked{" "}
            <span className="font-script text-[#c17c5f] text-5xl sm:text-6xl md:text-7xl font-normal lowercase inline-block ml-1">
              questions
            </span>
          </h2>
          <p className="text-[#526065] font-light text-base mt-4 leading-relaxed">
            Everything you need to know about getting started, clinical modalities, and
            practice logistics in Santa Monica.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-[#ffffff] rounded-sm border border-[#e7e2da] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#1b363f]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#c17c5f] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#526065] font-light text-[0.98rem] leading-[1.8] border-t border-[#f4f1ea] animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-12 pt-6">
          <p className="text-sm text-[#526065] font-light">
            Have a specific question not covered here?{" "}
            <Link
              href="#contact"
              className="text-[#c17c5f] underline underline-offset-4 hover:text-[#1b363f] transition-colors"
            >
              Reach out directly to schedule a conversation.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
