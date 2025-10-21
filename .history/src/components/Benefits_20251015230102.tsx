"use client";

import FreeDiagnostics from "@/assets/freeDiagnostics";
import DepartureToHome from "@/assets/departureToHome";
import Guarantee from "@/assets/guarantee";
import Experience from "@/assets/experience";
import { useBreakpoints } from "@/helpers/funtions";

export default function Benefits() {
  const { isSm } = useBreakpoints();
  const items = [
    {
      title: "Бесплатная диагностика",
      desc: "Определим проблему, вне зависимости от сложности",
      icon: <FreeDiagnostics />,
    },
    {
      title: "Выезд на дом",
      desc: "Приедем к вам в удобное время по всему Волгограду",
      icon: <DepartureToHome />,
    },
    {
      title: "Гарантия до 12 месяцев",
      desc: "Оригинальные запчасти — уверенность в качестве ремонта",
      icon: <Guarantee />,
    },
    {
      title: "Большой опыт",
      desc: "Мастера с опытом ремонта 20+ лет",
      icon: <Experience />,
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Почему выбирают нас</h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white py-6 px-4 shadow-[0_5px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-shadow text-center flex flex-col items-center justify-center"
            >
              <div className="h-12 w-12 rounded-full bg-yellow-400/90 grid place-items-center text-2xl select-none" aria-hidden>
                <span>{item.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 h-8 lg:h-16 md:h-10 sm:h-8">{item.title}</h3>
              {isSm && <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
