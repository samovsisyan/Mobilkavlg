import Button from "@/components/ui/Button";
import Yandex from "@/assets/yandex";
import Avito from "@/assets/avito";
import TwoGIS from "@/assets/twoGIS";

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="#F4CD1C">
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const reviews = [
  {
    name: "Анна Петрова",
    text:
      "Отличный сервис! Заменили экран на iPhone за 2 часа. Работает как новый, гарантию дали на год. Рекомендую!",
    source: <Avito />,
  },
  {
    name: "Анна Петрова",
    text:
      "Отличный сервис! Заменили экран на iPhone за 2 часа. Работает как новый, гарантию дали на год. Рекомендую!",
    source: <TwoGIS />,
  },
  {
    name: "Анна Петрова",
    text:
      "Отличный сервис! Заменили экран на iPhone за 2 часа. Работает как новый, гарантию дали на год. Рекомендую!",
    source: <Yandex />,
  },
];

export default function ReviewsPreview() {
  return (
    <section className="bg-slate-100 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Отзывы наших клиентов</h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((r, idx) => (
            <article key={idx} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_5px_12px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white text-sm font-bold" aria-hidden>
                  АП
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{r.name}</div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-slate-600 leading-6">{r.text}</p>

              <div className="mt-5 text-slate-900 font-semibold">{r.source}</div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button href="/reviews" variant="ghost" className="rounded-[10px] border-blue-600 text-blue-700 hover:bg-blue-50">
            Посмотреть подробно
          </Button>
        </div>
      </div>
    </section>
  );
}
