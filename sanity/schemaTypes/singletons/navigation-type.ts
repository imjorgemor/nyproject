import { defineField, defineType, defineArrayMember } from "sanity";
import { ThListIcon } from "@sanity/icons";

export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: ThListIcon,
  fields: [
    defineField({
      name: "navigation",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })],
      validation: (rule) => rule.max(8),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Navigation", media: ThListIcon };
    },
  },
});
