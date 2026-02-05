import { defineField, defineType, defineArrayMember } from "sanity";
import { MenuIcon } from "@sanity/icons";

export const navItemType = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "link",
      type: "internalLink",
    }),
    defineField({
      name: "children",
      title: "Dropdown Items",
      type: "array",
      of: [defineArrayMember({ type: "internalLink" })],
    }),
  ],
  preview: {
    select: {
      title: "link.label",
      children: "children",
    },
    prepare({ title, children }) {
      const count = children?.length || 0;
      return {
        title: title || "Untitled",
        subtitle: count > 0 ? `${count} dropdown item${count === 1 ? "" : "s"}` : undefined,
        media: MenuIcon,
      };
    },
  },
});
