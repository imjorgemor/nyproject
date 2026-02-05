import { defineQuery } from "next-sanity";
import { internalLinkFragment } from "../fragments/internal-link";
import { linkFragment } from "../fragments/link";

const footerColumnFragment = /* groq */ `
  _key,
  heading,
  items[] {
    _type == "internalLink" => {
      ${internalLinkFragment}
    },
    _type == "link" => {
      ${linkFragment}
    },
    _type == "footerTextItem" => {
      _key,
      _type,
      text
    }
  }
`;

export const FOOTER_QUERY = defineQuery(/* groq */ `
  *[_type == "footer"][0] {
    valuesMessage,
    columns[] {
      ${footerColumnFragment}
    },
    copyrightText,
    showSocialLinks,
    subscribeForm {
      heading,
      description,
      placeholder,
      buttonText
    }
  }
`);