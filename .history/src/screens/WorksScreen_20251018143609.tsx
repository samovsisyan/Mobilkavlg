import AboutHero from "@/components/AboutHero";
import WorksShowcase from "@/components/WorksShowcase";
import QuickDiagnosis from "@/components/QuickDiagnosis";
import WorksHero from "@/components/W";

export default function WorksScreen() {
  return (
    <section>
       <WorksHero />
       <WorksShowcase />
       <QuickDiagnosis />
    </section>
  );
}
