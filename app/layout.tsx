import type { Metadata } from "next";
import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy | Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA offering in-person & California telehealth therapy for anxiety, trauma (EMDR), burnout, and high-achieving adults.",
  keywords: [
    "Anxiety Therapy Santa Monica CA",
    "Psychologist Santa Monica",
    "Trauma Therapy Santa Monica",
    "EMDR Therapist California",
    "Burnout Therapy for Professionals",
    "Dr. Maya Reynolds PsyD",
    "Therapy for High Achievers",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
    description:
      "Compassionate, evidence-based therapy for anxiety, trauma, and burnout. In-person in Santa Monica and telehealth throughout California.",
    url: "https://www.mayareynoldspsyd.com",
    siteName: "Dr. Maya Reynolds, PsyD - Clinical Psychology",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1a2528] antialiased selection:bg-[#c17c5f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
