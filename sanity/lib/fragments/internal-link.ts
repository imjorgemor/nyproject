export const internalLinkFragment = /* groq */ `
  _key,
  _type,
  label,
  internalLink->{
    _id,
    title,
    pathPrefix,
    "slug": url.current
  }
`;
