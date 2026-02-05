import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const imageWithContentType = defineType({
  name: "imageWithContent",
  title: "Image with Content",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "listItems",
      title: "List Items",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional list of text items to display",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "internalLink",
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      initialValue: "gap",
      options: {
        list: [
          { title: "Gap", value: "gap" },
          { title: "Joined", value: "joined" },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "imagePosition",
    },
    prepare({ title, media, position }) {
      return {
        title: title || "Image with Content",
        subtitle: `Image ${position || "left"}`,
        media: media ?? ImageIcon,
      };
    },
  },
});
