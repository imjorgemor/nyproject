import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const subscribeFormType = defineType({
  name: "subscribeForm",
  title: "Subscribe Form",
  type: "object",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "enabled",
      title: "Show Subscribe Form",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "label",
      title: "Label",
      description:
        "Text displayed above the input (e.g., 'Subscribe to our newsletter')",
      type: "string",
      hidden: ({ parent }) => !parent?.enabled,
    }),
    defineField({
      name: "placeholder",
      title: "Placeholder",
      description: "Placeholder text inside the input field",
      type: "string",
      initialValue: "Enter your email",
      hidden: ({ parent }) => !parent?.enabled,
    }),
    defineField({
      name: "helpMessage",
      title: "Help Message",
      description: "Optional helper text below the input",
      type: "string",
      hidden: ({ parent }) => !parent?.enabled,
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      description: "Message shown after successful subscription",
      type: "string",
      initialValue: "Thanks for subscribing!",
      hidden: ({ parent }) => !parent?.enabled,
    }),
  ],
  preview: {
    select: {
      enabled: "enabled",
      label: "label",
    },
    prepare({ enabled, label }) {
      return {
        title: label || "Subscribe Form",
        subtitle: enabled ? "Enabled" : "Disabled",
        media: EnvelopeIcon,
      };
    },
  },
});
