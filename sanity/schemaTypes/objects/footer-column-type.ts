import { defineField, defineType, defineArrayMember } from "sanity";
import { InlineIcon } from "@sanity/icons";

export const footerColumnType = defineType({
  name: "footerColumn",
  title: "Footer Column",
  type: "object",
  icon: InlineIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({ type: "internalLink" }),
        defineArrayMember({ type: "link" }),
        defineArrayMember({ type: "footerTextItem" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      items: "items",
    },
    prepare({ title, items }) {
      const count = items?.length || 0;
      return {
        title: title || "Untitled column",
        subtitle: `${count} item${count === 1 ? "" : "s"}`,
        media: InlineIcon,
      };
    },
  },
});
