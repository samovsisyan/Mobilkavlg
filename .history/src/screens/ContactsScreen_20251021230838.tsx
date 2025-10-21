import QuickDiagnosis from "@/components/QuickDiagnosis";
import ContactsOverview from "@/components/ContactsOverview";
import ContactHero from "@/components/ContactHero";
import StayInTouch from "@/components/StayInTouch";

export default function ContactsScreen() {
  return (
    <section>
      <ContactHero />
      <div className="mx-auto max-w-6xl px-4 sm:px-6"></div>
      <StayInTouch />
      <QuickDiagnosis />
      <ContactsOverview />
    </section>
  );
}
