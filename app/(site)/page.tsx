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
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Welcome to The Church of Abundant Life in Harvey, Louisiana. Join us for Sunday worship, connect with our community, and plan your visit to Greater New Orleans.",
  path: "/",
});

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
