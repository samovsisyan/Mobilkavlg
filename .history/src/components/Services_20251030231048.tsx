import Check from "@/assets/check";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  image: string;
  items: string[];
  priceFrom: string;
};

const services: Service[] = [
  {
    id: "screen-replacement",
    title: "Замена экрана",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1600&auto=format&fit=crop",
    items: ["Ремонт матрицы", "Замена стекла", "Калибровка сенсора", "Гарантия на работу"],
    priceFrom: "от 3 000 ₽",
  },
  {
    id: "battery-replacement",
    title: "Замена батареи",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    items: [
      "Диагностика батареи",
      "Замена на оригинальную",
      "Оптимизация работы",
      "Гарантия 6 месяцев",
    ],
    priceFrom: "от 2 000 ₽",
  },
  {
    id: "water-damage",
    title: "Устранение залития",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1600&auto=format&fit=crop",
    items: ["Чистка от коррозии", "Диагностика платы", "Замена поврежденных элементов", "Герметизация"],
    priceFrom: "от 1 500 ₽",
  },
  {
    id: "camera-repair",
    title: "Ремонт камеры",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    items: ["Замена объектива", "Чистка камеры", "Настройка фокуса", "Проверка работы"],
    priceFrom: "от 2 500 ₽",
  },
];

export default function Services() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Наши услуги включают</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт любой сложности с гарантией качества. Наши специалисты используют только оригинальные запчасти и современное оборудование.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <Link 
              href={`/services/${service.id}`} 
              key={service.id}
              className="block group"
            >
              <article
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_5px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 group-hover:border-blue-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover" 
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" 
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.items.length > 3 && (
                      <li className="text-blue-600 text-sm font-medium">+{service.items.length - 3} еще</li>
                    )}
                  </ul>
                  <div className="mt-4 text-blue-700 font-bold text-xl">{service.priceFrom}</div>
                </div>
              </article>
            </Link>
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
