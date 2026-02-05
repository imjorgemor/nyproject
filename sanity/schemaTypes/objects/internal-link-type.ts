import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const internalLinkType = defineType({
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "internalLink",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled link",
        subtitle: "Internal link",
        media: LinkIcon,
      };
    },
  },
});
