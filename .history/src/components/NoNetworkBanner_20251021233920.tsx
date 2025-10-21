'use client';

import NetworkIcon from '@/assets/networkIcon';
import { useEffect, useState } from 'react';

export default function NoNetworkBanner() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Set initial online status
    setIsOnline(navigator.onLine);

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-2 left-[2%] md:left-[20%]  md:right-10 right-2 bg-white text-white p-2 md:p-8 text-center z-50 border border-[#9CA3AF] rounded-lg">
      <div className="container mx-auto flex flex-row gap-4">
        <NetworkIcon /> 
        
        <div className='flex flex-col gap-2 items-start text-black '>
            <p className='font-bold text-start'>Выключите VPN</p> 
            <p>VPN замедляет работу  сайта, из-за чего могут возникать непредвиденные ошибки.</p>
        </div>
        {/* <button 
          onClick={() => window.location.reload()}
          className="ml-4 bg-white text-yellow-700 px-4 py-1 rounded hover:bg-yellow-100 transition-colors"
        >
          Обновить
        </button> */}
      </div>
      <button
            aria-label="Закрыть окно"
            className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOnline(true)}
          >
            ✕
          </button>
    </div>
  );
}
