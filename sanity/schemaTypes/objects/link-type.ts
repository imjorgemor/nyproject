import { defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";

export const linkType = defineType({
  name: "link",
  title: "External Link",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    }),
  ],
  preview: {
    select: {
      title: "label",
      url: "url",
    },
    prepare({ title, url }) {
      return {
        title: title || "Untitled link",
        subtitle: url || "No URL",
        media: EarthGlobeIcon,
      };
    },
  },
});
