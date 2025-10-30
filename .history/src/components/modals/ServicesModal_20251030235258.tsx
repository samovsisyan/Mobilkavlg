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

interface ServicesModalProps {
  open: boolean;
  onClose: () => void;
  serviceSlug?: string;
}

export default function ServicesModal({ open, onClose, serviceSlug = 'phones' }: ServicesModalProps) {
  const { openCallRequestModal } = useModal();
  const [service, setService] = useState<typeof services[keyof typeof services] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    
    const timer = setTimeout(() => {
      const foundService = services[serviceSlug as ServiceSlug];
      if (!foundService) {
        console.error('Service not found:', serviceSlug);
        onClose();
        return;
      }
      setService(foundService);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [open, serviceSlug, onClose]);

  if (!open) return null;

  if (isLoading || !service) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="animate-pulse">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="relative h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Стоимость от</span>
                  <span className="text-2xl font-bold text-blue-700">{service.price}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">* Точная стоимость определяется после диагностики</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Что входит в услугу:</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button 
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-lg"
                  onClick={() => openCallRequestModal(service.title)}
                >
                  Оставить заявку на ремонт
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
