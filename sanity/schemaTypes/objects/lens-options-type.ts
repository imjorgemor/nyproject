import { defineField, defineType, defineArrayMember } from "sanity";

export const lensOptionsType = defineType({
  name: "lensOptions",
  title: "Lens Options",
  type: "object",
  fields: [
    defineField({
      name: "category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "options",
      type: "array",
      of: [defineArrayMember({ type: "lensOption" })],
    }),
  ],
  preview: {
    select: { title: "category", options: "options" },
    prepare({ title, options }) {
      return {
        title: title || "Lens Category",
        subtitle: `${options?.length || 0} options`,
      };
    },
  },
});
