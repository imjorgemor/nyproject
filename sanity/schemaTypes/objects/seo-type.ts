import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Overrides the page title in <title> and Open Graph tags.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Meta description for search engines.",
      validation: (rule) =>
        rule
          .max(160)
          .warning("Meta descriptions longer than 160 characters may be truncated in search results."),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Image used when sharing on social media.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "If enabled, this page will not be indexed by search engines.",
      initialValue: false,
    }),
  ],
});
