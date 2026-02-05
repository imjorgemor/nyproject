import { defineQuery } from "next-sanity";
import { internalLinkFragment } from "../fragments/internal-link";

const navItemFragment = /* groq */ `
  _key,
  link {
    ${internalLinkFragment}
  },
  children[] {
    ${internalLinkFragment}
  }
`;

export const NAVIGATION_QUERY = defineQuery(/* groq */ `
  *[_type == "navigation"][0] {
    navigation[] {
      ${navItemFragment}
    }
  }
`);