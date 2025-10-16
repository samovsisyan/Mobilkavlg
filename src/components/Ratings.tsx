import Avito from "@/assets/avito";
import Yandex from "@/assets/yandex";
import TwoGIS from "@/assets/twoGIS";
import Star from "@/assets/star";

export default function Ratings() {
  const sources = [
    { name: "Avito", Icon: Avito, color: "text-slate-900" },
    { name: "Яндекс", Icon: Yandex, color: "text-red-600" },
    { name: "2GIS", Icon: TwoGIS, color: "text-green-600" },
  ];

  return (
    <section className="bg-slate-100 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900">
              Идеальные оценки? <br className="hidden sm:block" /> Да, это возможно!
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {sources.map((s) => {
                const Icon = s.Icon;
                return (
                  <div key={s.name} className="text-center">
                    <div className={`mx-auto inline-block font-semibold ${s.color}`}>
                      <Icon className="h-6 sm:h-8 md:h-10" width={80} height={80}/>
                    </div>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <div className="mt-2 text-slate-700 text-base sm:text-lg font-medium">5.0</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
