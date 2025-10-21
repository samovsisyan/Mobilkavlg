import AboutHero from "@/components/AboutHero";
import WorksShowcase from "@/components/WorksShowcase";
import QuickDiagnosis from "@/components/QuickDiagnosis";
import WorksHero from "@/components/WorksHero";

export default function WorksScreen() {
  return (
    <section>
       <WorksHero />
       <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <WorksShowcase />
        <QuickDiagnosis />
       </div>
    </section>
  );
}
