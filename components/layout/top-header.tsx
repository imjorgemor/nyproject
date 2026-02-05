import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { sanityFetch } from '@/sanity/lib/live';
import { HEADER_QUERY } from '@/sanity/lib/queries/header';

const TopHeader = async () => {
  const { data } = await sanityFetch({
    query: HEADER_QUERY,
  });

  const displayText = data?.announcementBar?.link?.label || "Shop our glasses collection";
  const prefix = `${data?.announcementBar?.link?.internalLink?.pathPrefix}` || "collections";
  const slug = `${data?.announcementBar?.link?.internalLink?.slug}` || "glasses";

  return (
    <section className='w-full h-10 bg-primary-foreground flex items-center justify-center font-light rounded-xl'>
      <Link href={`${prefix}/${slug}`} className="px-4 font-semibold flex gap-4 items-center text-xs">
        <div className="relative overflow-hidden group">
          <span className="invisible flex items-center gap-2 text-center">
            {displayText.toUpperCase()}<span><ArrowRight className='h-4 w-4' /></span>
          </span>
          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300 flex items-center gap-2 text-center">
            {displayText.toUpperCase()}<span><ArrowRight className='h-4 w-4' /></span>
          </span>
          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300 flex items-center gap-2 text-center">
            {displayText.toUpperCase()}<span><ArrowRight className='h-4 w-4' /></span>
          </span>
        </div>
      </Link>
    </section>
  );
};

export { TopHeader };
