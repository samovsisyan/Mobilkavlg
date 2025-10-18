"use client";

import Button from "@/components/ui/Button";
import bg from "@/assets/mainIllustration/services.png";
import { useBreakpoints } from "@/helpers/funtions";
import AvitoOnlyLogo from "@/assets/logos/avitoOnlyLogo";
import YandexOnlyLogo from "@/assets/logos/yandexOnlyLogo";
import GisOnlyLogo from "@/assets/logos/gisOnlyLogo";

type ReviewsMainProps = {
  imageUrl?: string; // public/ path, e.g., "/assets/team.jpg"
};
export default function ReviewsMain({ imageUrl = bg.src }: ReviewsMainProps) {
  const { isSm } = useBreakpoints();
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      {/* Background image overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-slate-900/30" aria-hidden />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span></>
          <span className="text-white"><span className="text-blue-400">доверил нам </span> свою технику</span>
          <br />
          
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <Button href="/contacts" variant="primary" className="min-w-44">
            Связаться с нами
          </Button>
          {isSm && <Button href="/contacts" variant="ghost" className="min-w-44 border-white text-white hover:bg-white/10">
            Заказать звонок
          </Button>}
        </div>

        {/* Stats */}
          <div className="flex flex-wrap flex-wrap justify-center w-full mx-auto gap-8 pt-9">
          {[{
            icon: AvitoOnlyLogo,
            kpi: "5+",
            label: "Оставить отзыв",
          },{
            icon: YandexOnlyLogo,
            kpi: "4.9+",
            label: "Оставить отзыв",
          },{
            icon: GisOnlyLogo,
            kpi: "4.8+",
            label: "Оставить отзыв",
          }].map((s) => (
            <div key={s.label} className="px-5 py-4 text-left text-white">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="grid h-10 w-10 place-items-center text-xl" aria-hidden>
                  <s.icon />
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="text-2xl font-bold leading-none text-center">{s.kpi}</div>
                  <div className="text-md text-white text-center">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
