import { StackCompactIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const tabbedContentType = defineType({
  name: "tabbedContent",
  title: "Tabbed Content",
  type: "object",
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
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
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "internalLink",
            }),
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: title || "Untitled Tab" };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error("Add at least one tab"),
    }),
  ],
  preview: {
    select: {
      image: "image",
      imagePosition: "imagePosition",
      tabs: "tabs",
    },
    prepare({ image, imagePosition, tabs }) {
      const count = tabs?.length || 0;
      const position = imagePosition === "right" ? "Right" : "Left";
      return {
        title: "Tabbed Content",
        subtitle: `${count} tab${count !== 1 ? "s" : ""} · Image ${position}`,
        media: image ?? StackCompactIcon,
      };
    },
  },
});
