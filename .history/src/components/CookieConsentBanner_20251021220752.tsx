'use client';

import { useEffect, useState } from 'react';

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-3 md:mb-0 md:mr-4">
          Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. 
          Продолжая использовать сайт, вы соглашаетесь с нашей 
          <a href="/privacy" className="underline ml-1 hover:text-blue-200">Политикой конфиденциальности</a>.
        </p>
        <div className="flex space-x-2">
          <button 
            onClick={handleAccept}
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
