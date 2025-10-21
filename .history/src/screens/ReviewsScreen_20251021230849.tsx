import ReviewsMain from "@/components/ReviewsMain";
import ReviewsWall from "@/components/ReviewsWall";
import QuickDiagnosis from "@/components/QuickDiagnosis";

export default function ReviewsScreen() {
  return (
    <section>
      <ReviewsMain />
      <div className="mx-auto max-w-6xl px-4 sm:px-6"></div>
      <ReviewsWall />
      <QuickDiagnosis />
    </section>
  );
}
