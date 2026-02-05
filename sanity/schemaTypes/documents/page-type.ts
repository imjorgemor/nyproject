import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { SlugInput } from "@/sanity/components/inputs/SlugInput";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "pathPrefix",
      title: "Path Prefix",
      type: "string",
      initialValue: "pages",
      readOnly: true,
      options: {
        list: [
          { title: "Home Page", value: "home" },
          { title: "/pages/", value: "pages" },
          { title: "/collections/", value: "collections" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      type: "slug",
      options: {
        source: "title",
      },
      components: {
        input: SlugInput,
      },
    }),
    defineField({
      name: "content",
      type: "pageBuilder",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      fieldset: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});