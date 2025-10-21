'use client';

import CookieIcon from '@/assets/cookieIcon';
import { useEffect, useState } from 'react';
import Button from './ui/Button';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      // Small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

//   if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 left-[20%] right-10 bg-white text-white p-8 text-center z-50 border border-[#9CA3AF] rounded-lg">
      <div className="container mx-auto flex flex-row gap-4">
        <CookieIcon /> 
        
        <div className='flex flex-col gap-2 items-start text-black '>
            <p className='font-bold'>Мы используем файлы cookie</p> 
            <p>Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов <a href="">(подробнее об политике конфиденциальности читайте тут)</a></p>
        </div>
        <Button 
          onClick={handleAccept}
          className="ml-4 bg-white text-yellow-700 px-4 py-2 rounded hover:bg-yellow-100 transition-colors"
        >
          Принять
        </Button>
      </div>
      <button
            aria-label="Закрыть окно"
            className="absolute top-2 right-2 bg-white text-black px-2  rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            ✕
          </button>
    </div>
  );
}
