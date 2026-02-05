import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "The base URL of the site (e.g. https://huxleyeyewear.com)",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "favicon",
      type: "image",
    }),
    defineField({
      name: "seo",
      title: "Default SEO",
      type: "seo",
      description: "Default SEO settings used when pages don't specify their own.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings", media: CogIcon };
    },
  },
});
