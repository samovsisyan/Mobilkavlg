"use client";

import Button from "@/components/ui/Button";
import YellowTime from "@/assets/yellowTime";
import YellowPhone from "@/assets/yellowPhone";
import Guarantee from "@/assets/guarantee";
import Success from "@/assets/success";
import bg from "@/assets/mainIllustration/ourWorkMainIllustration.png";
import { useBreakpoints } from "@/helpers/funtions";
import { useModal } from "@/context/ModalContext";

type WorksHeroProps = {
  imageUrl?: string; // public/ path, e.g., "/assets/team.jpg"
};
export default function WorksHero({ imageUrl = bg.src }: WorksHeroProps) {
  const { isSm } = useBreakpoints();
  const { openContactModal, openCallRequestModal } = useModal();
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      {/* Background image overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden
        />
        {/* <div className="absolute inset-0 bg-slate-900/30" aria-hidden /> */}
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-[800px] mx-auto">
          <span className="text-blue-400">Более 1000 </span>
          <span className="text-white">успешных ремонтов</span>
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <Button variant="primary" className="min-w-44"
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
          >
            Связаться с нами
          </Button>
          {isSm && <Button variant="ghost" className="min-w-44 border-white text-white hover:bg-white/10"
            onClick={(e) => {
              e.preventDefault();
              openCallRequestModal();
            }}
          >
            Заказать звонок
          </Button>}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap flex-wrap justify-center w-full mx-auto gap-8 pt-9">
          {[{
            icon: YellowPhone,
            kpi: "3500+",
            label: "ремонтов в 2024",
          },{
            icon: YellowTime,
            kpi: "5+",
            label: "лет опыта",
          },{
            icon: Guarantee,
            kpi: "98%",
            label: "уровень успеха",
          },{
            icon: Success,
            kpi: "2+",
            label: "локаций",
          }].map((s) => (
            <div key={s.label} className="px-5 py-4 text-left text-white min-w-[160px]">
              <div className="flex flex-col justify-center items-center gap-8">
                <div className="grid h-10 w-10 place-items-center text-xl" aria-hidden>
                  <s.icon />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="text-2xl font-bold leading-none text-center">{s.kpi}</div>
                  <div className="text-xs text-white/80 text-center">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
