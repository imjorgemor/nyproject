'use client';

import { useEffect } from 'react';
import { AnalyticsEventName } from '@shopify/hydrogen-react';
import { useShopifyAnalytics } from '@/shopify/use-shopify-analytics';

function ShopifyAnalytics() {
  const { sendPageView, pathname } = useShopifyAnalytics();
  useEffect(() => {
    console.log('ShopifyAnalytics: sendPageView', pathname);
    sendPageView(AnalyticsEventName.PAGE_VIEW);
  }, [pathname, sendPageView]);
  return null;
}

export {ShopifyAnalytics};