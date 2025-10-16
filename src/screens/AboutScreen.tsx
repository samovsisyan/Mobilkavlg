import AboutHero from "@/components/AboutHero";
import AboutMedia from "@/components/AboutMedia";
import QuickDiagnosis from "@/components/QuickDiagnosis";
import ExpertsCarousel from "@/components/ExpertsCarousel";
import AboutStory from "@/components/AboutStory";

export default function AboutScreen() {
  return (
    <section>
      <AboutHero />
      <AboutStory />
      <ExpertsCarousel /> 
      <QuickDiagnosis />
    </section>
  );
}
