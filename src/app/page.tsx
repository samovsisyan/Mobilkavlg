import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ratings from "@/components/Ratings";
import Services from "@/components/Services";
import QuickDiagnosis from "@/components/QuickDiagnosis";
import WorksGallery from "@/components/WorksGallery";
import ReviewsPreview from "@/components/ReviewsPreview";
import FAQ from "@/components/FAQ";
import ContactsOverview from "@/components/ContactsOverview";
import ModalsControls from "@/components/ModalsControls";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Ratings />
      <Services />
      {/* Modals demo section */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Модальные окна</h2>
            <p className="mt-3 text-slate-600">Нажмите кнопку, чтобы открыть соответствующее модальное окно.</p>
          </div>
          <div className="mt-8">
            <ModalsControls />
          </div>
        </div>
      </section>
      <QuickDiagnosis />
      <WorksGallery />
      {/* <WorksShowcase /> */}
       <ReviewsPreview />
      {/* <ReviewsWall /> */}
      <FAQ />
      {/* <AboutStory />
      <ExpertsCarousel /> */}
      <ContactsOverview />
      {/* <FullRepair />
      <ServiceCalculator /> */}

      {/* <ErrorHero />
      <PrivacyPolicy /> */}

    </div>
  );
}
