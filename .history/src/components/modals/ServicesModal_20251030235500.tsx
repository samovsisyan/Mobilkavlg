'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import Check from '@/assets/check';

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
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
          {/* Modal Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Service Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{service.title}</span>
              </div>
            </div>
            
            {/* Service Details */}
            <div className="flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Price Badge */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Стоимость от</span>
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">* Точная стоимость определяется после диагностики</p>
                </div>
                
                {/* Features List */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Что входит в услугу:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="flex-shrink-0 mt-1 text-green-500" />
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => {
                    onClose();
                    openCallRequestModal(service.title);
                  }}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-center"
                >
                  Оставить заявку на ремонт
                </button>
                <button 
                  onClick={onClose}
                  className="w-full py-2.5 px-6 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors duration-200 text-center"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
