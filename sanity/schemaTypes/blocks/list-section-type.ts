import { defineType, defineField, defineArrayMember } from "sanity";
import { InlineIcon } from "@sanity/icons";

export const listSectionType = defineType({
  name: "listSection",
  title: "List Section",
  type: "object",
  icon: InlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Optional title displayed above the list",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "Column List", value: "column" },
          { title: "Row List", value: "row" },
        ],
        layout: "radio",
      },
      initialValue: "grid",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "listItem",
          title: "List Item",
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
              rows: 4,
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
              return { title: title || "Untitled Item" };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error("Add at least one item"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
      layout: "layout",
    },
    prepare({ title, items, layout }) {
      const count = items?.length || 0;
      return {
        title: title || "List Section",
        subtitle: `${layout || "grid"} • ${count} item${count === 1 ? "" : "s"}`,
        media: InlineIcon,
      };
    },
  },
});
