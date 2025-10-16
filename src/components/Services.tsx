import Check from "@/assets/check";
import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  image: string;
  items: string[];
  priceFrom: string;
};

const services: Service[] = [
  {
    title: "Телефоны",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1600&auto=format&fit=crop",
    items: ["Замена матрицы", "Чистка от пыли", "Замена клавиатуры", "Ремонт платы"],
    priceFrom: "от 500 ₽",
  },
  {
    title: "Ноутбуки",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    items: [
      "Замена экрана и ремонт",
      "Замена клавиатуры",
      "Ремонт разъёма",
      "Удаление вирусов",
    ],
    priceFrom: "от 800 ₽",
  },
  {
    title: "Компьютеры",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1600&auto=format&fit=crop",
    items: ["Диагностика ПК", "Замена блока  питания", "Установка ОС", "Замена комплектующих"],
    priceFrom: "от 1500 ₽",
  },
  {
    title: "ТВ и Мониторы",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    items: ["Ремонт матрицы", "Замена блока питания", "Ремонт платы управления", "Настройка"],
    priceFrom: "от 2000 ₽",
  },
];

export default function Services() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Услуги и цены</h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_5px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      {/* <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden /> */}
                      <Check />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-blue-700 font-bold text-xl">{s.priceFrom}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-slate-400 text-sm">Точная стоимость определяется после диагностики</p>

        <div className="mt-4 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-[10px] border border-blue-600 px-5 py-3 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
          >
            Посмотреть подробно
          </Link>
        </div>
      </div>
    </section>
  );
}
