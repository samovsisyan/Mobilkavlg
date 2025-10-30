'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
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

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { openCallRequestModal } = useModal();
  const [service, setService] = useState<typeof services[keyof typeof services] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    // Extract slug from params
    const loadData = async () => {
      try {
        const slugValue = await Promise.resolve(params.slug);
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
    <div className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загрузка услуги...</p>
          </div>
        ) : service ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                        {/* <Check /> */}
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800">{feature}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Услуга не найдена</p>
          </div>
        )}
      </div>
    </div>
  );
}
