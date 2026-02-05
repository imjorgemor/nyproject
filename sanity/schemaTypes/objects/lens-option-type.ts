import { defineField, defineType } from "sanity";

export const lensOptionType = defineType({
  name: "lensOption",
  title: "Lens Option",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "altTitle",
      title: "Alternative Title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "basePrice",
      title: "Base Price",
      type: "number",
    }),
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      description: "Unique identifier for this option",
    }),
  ],
});
