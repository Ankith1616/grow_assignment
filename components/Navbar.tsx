"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const specialties = [
    { name: "Anxiety & Panic Therapy", href: "#services" },
    { name: "Trauma & EMDR Therapy", href: "#services" },
    { name: "Burnout & Perfectionism", href: "#services" },
    { name: "Somatic & Body-Oriented Work", href: "#approach" },
  ];

  const approaches = [
    { name: "Cognitive-Behavioral Therapy (CBT)", href: "#approach" },
    { name: "EMDR Therapy", href: "#approach" },
    { name: "Mindfulness-Based Practices", href: "#approach" },
    { name: "Nervous System Regulation", href: "#approach" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-xs py-3.5"
          : "bg-[#faf8f5] py-5 md:py-6"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link href="/" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-[1.7rem] font-normal tracking-tight text-[#1b363f] group-hover:text-[#c17c5f] transition-colors">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[0.68rem] tracking-[0.16em] uppercase font-normal text-[#526065] flex items-center gap-1.5 pt-0.5">
            <span>Licensed Clinical Psychologist</span>
            <span className="opacity-40">•</span>
            <span className="flex items-center text-[#c17c5f]">
              <MapPin className="w-2.5 h-2.5 inline mr-0.5" />
              Santa Monica, CA
            </span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[0.82rem] tracking-[0.14em] uppercase font-medium text-[#1b363f]">
          <Link
            href="#about"
            className="hover:text-[#c17c5f] transition-colors py-2"
          >
            About
          </Link>

          {/* Specialties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("specialties")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-[#c17c5f] transition-colors py-2 uppercase cursor-pointer">
              <span>Specialties</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
            {openDropdown === "specialties" && (
              <div className="absolute top-full left-0 w-64 bg-[#ffffff] shadow-xl rounded-sm py-2 border border-[#e7e2da] animate-in fade-in slide-in-from-top-1 duration-200">
                {specialties.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2.5 text-[0.82rem] normal-case tracking-normal text-[#1b363f] hover:bg-[#faf8f5] hover:text-[#c17c5f] transition-colors border-b border-[#f4f1ea] last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Approach Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("approach")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-[#c17c5f] transition-colors py-2 uppercase cursor-pointer">
              <span>Approach</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
            {openDropdown === "approach" && (
              <div className="absolute top-full left-0 w-72 bg-[#ffffff] shadow-xl rounded-sm py-2 border border-[#e7e2da] animate-in fade-in slide-in-from-top-1 duration-200">
                {approaches.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2.5 text-[0.82rem] normal-case tracking-normal text-[#1b363f] hover:bg-[#faf8f5] hover:text-[#c17c5f] transition-colors border-b border-[#f4f1ea] last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#office"
            className="hover:text-[#c17c5f] transition-colors py-2"
          >
            Office &amp; Telehealth
          </Link>

          <Link
            href="#faqs"
            className="hover:text-[#c17c5f] transition-colors py-2"
          >
            FAQs
          </Link>
        </nav>

        {/* Right: CTA Pill & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex btn-pill px-6 py-2.5 text-[0.78rem]"
          >
            Consultation
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1b363f] hover:text-[#c17c5f] focus:outline-hidden relative z-50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#faf8f5] z-40 flex flex-col pt-28 pb-12 px-8 overflow-y-auto">
          <nav className="flex flex-col space-y-5 text-center mt-2">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.14em] py-2 text-[#1b363f]"
            >
              About
            </Link>

            {/* Mobile Specialties */}
            <div className="border-t border-b border-[#e7e2da] py-3">
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "specialties" ? null : "specialties"
                  )
                }
                className="w-full flex items-center justify-center gap-2 text-lg uppercase tracking-[0.14em] text-[#1b363f]"
              >
                <span>Specialties</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileSubmenu === "specialties" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSubmenu === "specialties" && (
                <div className="mt-4 space-y-3 pb-2">
                  {specialties.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#526065] hover:text-[#c17c5f]"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Approach */}
            <div className="border-b border-[#e7e2da] pb-3">
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "approach" ? null : "approach"
                  )
                }
                className="w-full flex items-center justify-center gap-2 text-lg uppercase tracking-[0.14em] text-[#1b363f]"
              >
                <span>Approach</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileSubmenu === "approach" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSubmenu === "approach" && (
                <div className="mt-4 space-y-3 pb-2">
                  {approaches.map((a) => (
                    <Link
                      key={a.name}
                      href={a.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#526065] hover:text-[#c17c5f]"
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.14em] py-2 text-[#1b363f]"
            >
              Office &amp; Telehealth
            </Link>

            <Link
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.14em] py-2 text-[#1b363f]"
            >
              FAQs
            </Link>

            <div className="pt-6">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block btn-pill-terracotta w-full max-w-xs py-3 text-sm"
              >
                Schedule a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
