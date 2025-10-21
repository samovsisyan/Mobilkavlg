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

//   if (isOnline) return null;

  return (
    <div className="fixed bottom-2 left-[20%] right-10 bg-yellow-500 text-white p-4 text-center z-50">
      <div className="container mx-auto flex flex-row gap-4">
        <NetworkIcon /> 
        
        <div className='flex flex-col gap-2 i'>
            <p>Выключите VPN</p> 
            <p>VPN замедляет работу  сайта, из-за чего могут возникать непредвиденные ошибки.</p>
        </div>
        {/* <button 
          onClick={() => window.location.reload()}
          className="ml-4 bg-white text-yellow-700 px-4 py-1 rounded hover:bg-yellow-100 transition-colors"
        >
          Обновить
        </button> */}
      </div>
    </div>
  );
}
