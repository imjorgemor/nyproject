import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const footerTextItemType = defineType({
  name: "footerTextItem",
  title: "Text Item",
  type: "object",
  icon: TextIcon,
  fields: [
    defineField({
      name: "text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "text" },
    prepare({ title }) {
      return {
        title: title || "Untitled text",
        subtitle: "Text",
        media: TextIcon,
      };
    },
  },
});
