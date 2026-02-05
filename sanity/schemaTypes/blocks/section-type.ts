import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const sectionType = defineType({
  name: "section",
  title: "Section",
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
      rows: 3,
    }),
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
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType === "video",
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
      name: "aspectRatio",
      title: "Height",
      type: "string",
      options: {
        list: [
          { title: "Cinematic (21:9)", value: "21:9" },
          { title: "Wide Banner (3:1)", value: "3:1" },
          { title: "Slim Banner (4:1)", value: "4:1" },
        ],
        layout: "radio",
      },
      initialValue: "21:9",
    }),
    defineField({
      name: "link",
      type: "internalLink",
    }),
    defineField({
      name: "contentPlacement",
      title: "Content Placement",
      type: "string",
      initialValue: "middle",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Middle", value: "middle" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
      mediaType: "mediaType",
    },
    prepare({ title, media, mediaType }) {
      return {
        title: title || "Untitled section",
        subtitle: `Section${mediaType === "video" ? " (Video)" : ""}`,
        media: media ?? BlockContentIcon,
      };
    },
  },
});
