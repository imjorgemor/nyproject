'use client';

import { useEffect, useState } from 'react';
import { type SlugInputProps, SlugInput as DefaultSlugInput, useClient, useFormValue, set } from 'sanity';
import { apiVersion } from '@/sanity/env';

const SITE_URL_QUERY = `*[_type == "siteSettings"][0].siteUrl`;

function buildUrl(siteUrl: string | null, slug: string | undefined, pathPrefix: string | undefined): string {
  const base = siteUrl ? siteUrl.replace(/\/+$/, '') : '';

  if (pathPrefix === 'home') {
    return base ? `${base}/` : '/';
  }

  const prefix = pathPrefix || 'pages';
  if (!slug) return base ? `${base}/${prefix}/` : `/${prefix}/`;
  return base ? `${base}/${prefix}/${slug}` : `/${prefix}/${slug}`;
}

export function SlugInput(props: SlugInputProps) {
  const [siteUrl, setSiteUrl] = useState<string | null>(null);
  const client = useClient({ apiVersion });
  const slug = useFormValue(['url', 'current']) as string | undefined;
  const pathPrefix = useFormValue(['pathPrefix']) as string | undefined;
  const isHome = pathPrefix === 'home';

  useEffect(() => {
    client.fetch<string | null>(SITE_URL_QUERY).then(setSiteUrl);
  }, [client]);

  const { onChange } = props;
  useEffect(() => {
    if (isHome && slug !== '/') {
      onChange(set({ current: '/', _type: 'slug' }));
    }
  }, [isHome, slug, onChange]);

  const fullUrl = buildUrl(siteUrl, slug, pathPrefix);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <span
        style={{
          fontSize: '0.8125rem',
          color: 'var(--card-muted-fg-color, #8a8a8a)',
          wordBreak: 'break-all',
        }}
      >
        {fullUrl}
      </span>
      <DefaultSlugInput {...props} readOnly={isHome} />
    </div>
  );
}
