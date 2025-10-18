import AboutHero from "@/components/AboutHero";
import FullRepair from "@/components/FullRepair";
import Benefits from "@/components/Benefits";
import ServiceCalculator from "@/components/ServiceCalculator";
import QuickDiagnosis from "@/components/QuickDiagnosis";

export default function ServicesScreen() {
  return (
    <section>
      <ServicesHero />
      <FullRepair />
      <Benefits />
      <ServiceCalculator /> 
      <QuickDiagnosis />
    </section>
  );
}
