import { defineQuery } from "next-sanity";
import { internalLinkFragment } from "../fragments/internal-link";

export const HEADER_QUERY = defineQuery(/* groq */ `
  *[_type == "header"][0] {
    announcementBar {
      enabled,
      link {
        ${internalLinkFragment}
      }
    }
  }
`);