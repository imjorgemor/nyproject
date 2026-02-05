import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { VisualEditing } from 'next-sanity/visual-editing';

import { DisableDraftMode } from '@/components/disable-draft-mode';
import { LenisProvider } from '@/components/lenis-provider';
import { TopHeader } from '@/components/layout/top-header';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries/site-settings';
import { DesktopMenu } from '@/components/layout/desktop-menu';
import { Footer } from '@/components/layout/footer';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
  });
  return {
    metadataBase: new URL(data?.siteUrl || baseUrl),
    title: data?.seo?.metaTitle || "Quality prescription glasses from $139 | Huxley Eyewear",
    description: data?.seo?.metaDescription || "Shop affordable, high-quality glasses and sunglasses at Huxley from $139. ✓Virtual try-on glasses. ✓1-year warranty. Find your perfect pair today!",
  };
}

export default async function HuxleyLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <LenisProvider>
      <div className="bg-white min-h-screen px-[2vw] pt-4 pb-[2vw]">
        <TopHeader />
        <DesktopMenu />
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <Footer />
      </div>
    </LenisProvider>
  );
}
