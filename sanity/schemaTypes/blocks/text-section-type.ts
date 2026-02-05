import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const textSectionType = defineType({
  name: "textSection",
  title: "Text Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "link",
      type: "internalLink",
    }),
    defineField({
      name: "textAlign",
      title: "Text Alignment",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled text section",
        subtitle: "Text Section",
        media: TextIcon,
      };
    },
  },
});
