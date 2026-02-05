import { Inter } from "next/font/google";
import Script from 'next/script';

import "./globals.css";
import { MetaPageView } from "@/components/meta-page-view";
import { ShopifyAnalytics } from "@/components/shopify-analytics";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-1011839247"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1011839247');
          `}
        </Script>
        <Script id='google-analytics-config-roseville'>
          {`
            gtag('config', 'AW-1011839247/t1eoCNHq5eUZEI_iveID', {
              'phone_conversion_number': '651-621-3684'
            });
          `}
        </Script>
        <Script id='google-analytics-config-wayzata'>
          {`
            gtag('config', 'AW-1011839247/t1eoCNHq5eUZEI_iveID', {
              'phone_conversion_number': '651-373-0748'
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <MetaPageView />
        <ShopifyAnalytics />
      </body>
    </html>
  );
}
