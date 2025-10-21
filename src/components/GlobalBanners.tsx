'use client';

import dynamic from 'next/dynamic';

// Import components with no SSR
const NoNetworkBanner = dynamic(() => import('@/components/NoNetworkBanner'), { ssr: false });
const CookieConsentBanner = dynamic(() => import('@/components/CookieConsentBanner'), { ssr: false });

export default function GlobalBanners() {
  return (
    <>
      <NoNetworkBanner />
      <CookieConsentBanner />
    </>
  );
}
