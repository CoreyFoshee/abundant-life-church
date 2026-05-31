import { DeclarationsMarquee } from "@/components/DeclarationsMarquee";
import { EventsSection } from "@/components/EventsSection";
import { GivingSection } from "@/components/GivingSection";
import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { ServiceTimes } from "@/components/ServiceTimes";
import { StraightTalk } from "@/components/StraightTalk";
import { VerseOfDay } from "@/components/VerseOfDay";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <DeclarationsMarquee />
      <WelcomeSection />
      <EventsSection />
      <StraightTalk />
      <ServiceTimes />
      <VerseOfDay />
      <GivingSection />
    </>
  );
}
