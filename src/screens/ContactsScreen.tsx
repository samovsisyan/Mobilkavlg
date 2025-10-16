import QuickDiagnosis from "@/components/QuickDiagnosis";
import ContactsOverview from "@/components/ContactsOverview";
import ContactHero from "@/components/ContactHero";
import StayInTouch from "@/components/StayInTouch";

export default function ContactsScreen() {
  return (
    <section>
      <ContactHero />
      <StayInTouch />
      <QuickDiagnosis />
      <ContactsOverview />
    </section>
  );
}
