import { defineType, defineField, defineArrayMember } from "sanity";
import { PinIcon } from "@sanity/icons";

export const storesSectionType = defineType({
  name: "storesSection",
  title: "Stores Section",
  type: "object",
  icon: PinIcon,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Optional title displayed above the stores",
    }),
    defineField({
      name: "stores",
      title: "Stores",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "store",
          title: "Store",
          fields: [
            defineField({
              name: "title",
              title: "Store Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description: "e.g., Flagship Store, Outlet",
            }),
            defineField({
              name: "address",
              title: "Address",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "openingHours",
              title: "Opening Hours",
              type: "object",
              fields: [
                defineField({ name: "monday", title: "Monday", type: "string" }),
                defineField({ name: "tuesday", title: "Tuesday", type: "string" }),
                defineField({ name: "wednesday", title: "Wednesday", type: "string" }),
                defineField({ name: "thursday", title: "Thursday", type: "string" }),
                defineField({ name: "friday", title: "Friday", type: "string" }),
                defineField({ name: "saturday", title: "Saturday", type: "string" }),
                defineField({ name: "sunday", title: "Sunday", type: "string" }),
              ],
              options: {
                columns: 2,
              },
            }),
            defineField({
              name: "phoneNumber",
              title: "Phone Number",
              type: "string",
            }),
            defineField({
              name: "externalLinks",
              title: "External Links",
              type: "array",
              of: [defineArrayMember({ type: "link" })],
              validation: (rule) => rule.max(4),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "subtitle" },
            prepare({ title, subtitle }) {
              return {
                title: title || "Untitled Store",
                subtitle: subtitle,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error("Add at least one store"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      stores: "stores",
    },
    prepare({ title, stores }) {
      const count = stores?.length || 0;
      return {
        title: title || "Stores Section",
        subtitle: `${count} store${count === 1 ? "" : "s"}`,
        media: PinIcon,
      };
    },
  },
});
