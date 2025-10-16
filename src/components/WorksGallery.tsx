import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Разборка ноутбука",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Ремонт материнской платы",
  },
  {
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop",
    alt: "Установка процессора",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Пайка компонентов",
  },
  {
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop",
    alt: "Обслуживание системы охлаждения",
  },
];

export default function WorksGallery() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Примеры наших работ</h2>

        {/* Grid layout: mobile (2 cols, middle wide), desktop (3 cols, bottom-left wide) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Item 1 */}
          <div className="order-1 lg:order-1 relative h-40 sm:h-44 lg:h-56 overflow-hidden rounded-xl bg-slate-200">
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw" />
          </div>
          {/* Item 2 */}
          <div className="order-2 lg:order-2 relative h-40 sm:h-44 lg:h-56 overflow-hidden rounded-xl bg-slate-200">
            <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw" />
          </div>
          {/* Wide item (middle on mobile, bottom-left on desktop) */}
          <div className="order-3 lg:order-4 col-span-2 lg:col-span-2 relative h-48 sm:h-56 lg:h-72 overflow-hidden rounded-xl bg-slate-200">
            <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" sizes="(min-width: 1024px) 66vw, (min-width: 640px) 66vw, 100vw" />
          </div>
          {/* Item 3 (appears after wide on mobile, top-right on desktop) */}
          <div className="order-4 lg:order-3 relative h-40 sm:h-44 lg:h-56 overflow-hidden rounded-xl bg-slate-200">
            <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw" />
          </div>
          {/* Item 4 */}
          <div className="order-5 lg:order-5 relative h-40 sm:h-44 lg:h-56 overflow-hidden rounded-xl bg-slate-200">
            <Image src={images[4].src} alt={images[4].alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw" />
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button href="/works" variant="outline" className="rounded-[10px] border-blue-600 text-blue-700 hover:bg-blue-50">
            Посмотреть подробно
          </Button>
        </div>
      </div>
    </section>
  );
}
