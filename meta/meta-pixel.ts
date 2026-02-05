export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = (): void => {
  window.fbq('track', 'PageView');
};

const initFBPixel = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.fbq = function (...args: any[]) {
      if (window.fbq.callMethod) {
        // eslint-disable-next-line prefer-spread
        window.fbq.callMethod.apply(window.fbq, args);
      } else {
        window.fbq.queue.push(args);
      }
    };
  
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    window.fbq('init', FB_PIXEL_ID);
  };
  
  export const loadFBPixelScript = () => {
    if (window.fbq) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    document.head.appendChild(script);
    initFBPixel();
  };

// https://developers.facebook.com/docs/facebook-pixel/advanced/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const event = (name: any, options = {}) => {
    (window).fbq('track', name, options);
};
