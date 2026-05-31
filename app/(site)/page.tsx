import { DeclarationsMarquee } from "@/components/DeclarationsMarquee";
import { EventsSection } from "@/components/EventsSection";
import { GivingSection } from "@/components/GivingSection";
import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { ServiceTimes } from "@/components/ServiceTimes";
import { StraightTalk } from "@/components/StraightTalk";
import { VerseOfDay } from "@/components/VerseOfDay";
import { WelcomeSection } from "@/components/WelcomeSection";
import { getServiceTimes } from "@/lib/services";

export default async function HomePage() {
  const { services } = await getServiceTimes();

  return (
    <>
      <Hero services={services} />
      <QuickActions />
      <DeclarationsMarquee />
      <WelcomeSection />
      <EventsSection />
      <StraightTalk />
      <ServiceTimes services={services} />
      <VerseOfDay />
      <GivingSection />
    </>
  );
}
