import { imageFragment } from "./image";

export const seoFragment = /* groq */ `
  metaTitle,
  metaDescription,
  ogImage {
    ${imageFragment}
  },
  noIndex
`;
