'use client';

import CookieIcon from '@/assets/cookieIcon';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const isLg = useMediaQuery('lg');

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

  // if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 left-[2%] md:left-[20%]  right-10 bg-white text-white p-2 md:p-8 text-center z-50 border border-[#9CA3AF] rounded-lg">
      <div className=" flex flex-row gap-4 items-end">
        <div style={{width: '86px', height: '86px'}}>
          <CookieIcon width={86} height={86}/> 
        </div>
        
        <div className='flex flex-col gap-2 items-start text-black '>
            <p className='font-bold'>Мы используем файлы cookie</p> 
            <p className='text-sm text-start'>Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов <Link href="/" className='underline'>(подробнее об политике конфиденциальности читайте тут)</Link></p>
        </div>
        {isLg && <Button 
          href="/contacts" variant="primary"
          onClick={handleAccept}
          className="h-10"
        >
          Принять
        </Button>}
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
