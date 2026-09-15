import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HopeSection from "@/components/HopeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import StoryBannerSection from "@/components/StoryBannerSection";
import AboutBioSection from "@/components/AboutBioSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurOfficeSection from "@/components/OurOfficeSection";
import FaqSection from "@/components/FaqSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <HopeSection />
        <WhoWeHelpSection />
        <StoryBannerSection />
        <AboutBioSection />
        <ExpertiseSection />
        <HowWeWorkSection />
        <OurOfficeSection />
        <FaqSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}
