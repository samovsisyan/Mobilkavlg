'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

// This would typically come from your database or API
const services = {
  phones: {
    title: 'Ремонт телефонов',
    description: 'Профессиональный ремонт смартфонов всех марок с гарантией качества',
    price: 'от 500 ₽',
    image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Замена экрана (LCD, OLED, AMOLED)',
      'Замена батареи и оптимизация',
      'Устранение повреждений от воды',
      'Ремонт камеры и динамика',
      'Программные проблемы и разблокировка',
      'Замена корпуса и кнопок'
    ]
  },
  notebooks: {
    title: 'Ремонт ноутбуков',
    description: 'Комплексный ремонт ноутбуков любой сложности с гарантией',
    price: 'от 800 ₽',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Замена экрана и матрицы',
      'Ремонт материнской платы',
      'Чистка от пыли и замена термопасты',
      'Замена клавиатуры и тачпада',
      'Ремонт разъёмов питания',
      'Апгрейд комплектующих'
    ]
  },
  pc: {
    title: 'Ремонт компьютеров',
    description: 'Настройка и ремонт стационарных компьютеров',
    price: 'от 1500 ₽',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Диагностика неисправностей',
      'Замена комплектующих',
      'Установка и настройка ОС',
      'Чистка от пыли',
      'Настройка интернета и сети',
      'Восстановление данных'
    ]
  },
  tv: {
    title: 'Ремонт телевизоров и мониторов',
    description: 'Профессиональный ремонт телевизоров и мониторов всех брендов',
    price: 'от 2000 ₽',
    image: 'https://images.unsplash.com/photo-1593030103066-933371e68952?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Замена матрицы',
      'Ремонт блока питания',
      'Замена подсветки',
      'Ремонт платы управления',
      'Настройка и калибровка',
      'Чистка от пыли'
    ]
  }
} as const;

type ServiceSlug = keyof typeof services;

// Metadata can't be used in client components
// You can move this to layout.tsx or page.tsx in the parent directory

export default function ServicePage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { openCallRequestModal } = useModal();
  const [service, setService] = useState<typeof services[keyof typeof services] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState('');

  console.log(service);
  useEffect(() => {
    // Handle both direct params object and Promise<params>
    const loadData = async () => {
      try {
        const resolvedParams = await Promise.resolve(params);
        const slugValue = resolvedParams.slug;
        setSlug(slugValue);
        
        const foundService = services[slugValue as ServiceSlug];
        if (!foundService) {
          notFound();
        }
        setService(foundService);
      } catch (error) {
        console.error('Error loading service:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [params]);

  if (isLoading || !service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {service.map((service) => (
    
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
                        {/* <Check className="flex-shrink-0 mt-1" /> */}
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
          ))}
        </div>
  );
}
