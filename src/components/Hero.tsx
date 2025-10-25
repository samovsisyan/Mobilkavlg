"use client";
import { useBreakpoints } from "@/helpers/funtions";
import Button from "@/components/ui/Button";
import bg from "@/assets/mainIllustration/homeMainIllustartion.png";
import { useModal } from "@/context/ModalContext";
type AboutHeroProps = {
  imageUrl?: string; // public/ path, e.g., "/assets/team.jpg"
};
export default function Hero({ imageUrl = bg.src }: AboutHeroProps) {
  const { isSm } = useBreakpoints();
  const year = new Date().getFullYear();
  const { openContactModal, openCallRequestModal } = useModal();
  
  return (
    <section className="relative isolate">
      {/* Background image */}
       <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden
        />
      </div>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden /> */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 text-center text-white">
        {/* Title */}
        <h1 className="mx-auto max-w-4xl font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Профессиональный ремонт техники в <span className="text-blue-400">Волгограде</span>
        </h1>

        {/* Features */}
        <ul className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base sm:text-lg md:text-xl text-white/90">
          {[
            "Бесплатная диагностика",
            "Выезд на дом",
            "Гарантия до 12 месяцев",
          ].map((item, idx, arr) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-white w-2 h-2 rounded-full bg-white" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="min-w-[220px]" onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            openCallRequestModal();
          }}>
            Заказать звонок
          </Button>
          {isSm && <Button variant="outline" size="lg" className="min-w-[220px]" onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            openContactModal();
          }}>
            Связаться с нами
          </Button>}
        </div>

        {/* Achievement */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 text-white/95 text-sm sm:text-base md:text-lg">
          <span aria-hidden>🏆</span>
          <span>Более 7000 успешных ремонтов в {year} году</span>
        </div>
      </div>
    </section>
  );
}