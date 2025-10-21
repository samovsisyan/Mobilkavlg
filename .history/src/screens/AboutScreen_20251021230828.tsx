import AboutHero from "@/components/AboutHero";
import AboutMedia from "@/components/AboutMedia";
import QuickDiagnosis from "@/components/QuickDiagnosis";
import ExpertsCarousel from "@/components/ExpertsCarousel";
import AboutStory from "@/components/AboutStory";

export default function AboutScreen() {
  return (
    <section>
      <AboutHero />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <AboutStory />
      <ExpertsCarousel /> 
      <QuickDiagnosis />
    </section>
  );
}
