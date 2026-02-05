import { defineField, defineType } from "sanity";
import { MenuIcon } from "@sanity/icons";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "announcementBar",
      title: "Announcement Bar",
      type: "object",
      fields: [
        defineField({
          name: "enabled",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "link",
          type: "internalLink",
          hidden: ({ parent }) => !parent?.enabled,
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Header", media: MenuIcon };
    },
  },
});
