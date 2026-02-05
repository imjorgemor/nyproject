import { defineField, defineType, defineArrayMember } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "valuesMessage",
      title: "Values Message",
      description:
        "A message displayed above the footer (e.g., 'We love helping our neighbors. Visit our stores today')",
      type: "string",
    }),
    defineField({
      name: "columns",
      type: "array",
      of: [defineArrayMember({ type: "footerColumn" })],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),
    defineField({
      name: "showSocialLinks",
      title: "Show Social Links",
      description: "Display social links from Site Settings",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "subscribeForm",
      title: "Newsletter Subscribe Form",
      type: "subscribeForm",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Footer", media: BlockContentIcon };
    },
  },
});
