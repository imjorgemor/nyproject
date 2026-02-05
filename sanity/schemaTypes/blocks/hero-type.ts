import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const heroType = defineType({
  name: "hero",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "image",
      type: "image",
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "contentPlacement",
      title: "Content Placement",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    }),
    defineField({
      name: "aspectRatio",
      title: "Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "Standard (16:9)", value: "16:9" },
          { title: "Narrow (21:9)", value: "21:9" },
        ],
        layout: "radio",
      },
      initialValue: "16:9",
    }),
    defineField({
      name: "button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          type: "string",
        }),
        defineField({
          name: "url",
          type: "url",
        }),
      ],
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero",
        media: media ?? TextIcon,
      };
    },
  },
});