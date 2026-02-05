import { defineQuery } from "next-sanity";
import { imageFragment } from "../fragments/image";
import { seoFragment } from "../fragments/seo";

export const SITE_SETTINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "siteSettings"][0] {
    siteName,
    siteUrl,
    logo {
      ${imageFragment}
    },
    favicon {
      ${imageFragment}
    },
    seo {
      ${seoFragment}
    }
  }
`);




