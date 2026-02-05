import { defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";

export const socialLinkType = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "platform",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "TikTok", value: "tiktok" },
        ],
      },
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: {
      platform: "platform",
      url: "url",
    },
    prepare({ platform, url }) {
      const labels: Record<string, string> = {
        twitter: "X (Twitter)",
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube",
        tiktok: "TikTok",
        github: "GitHub",
      };
      return {
        title: labels[platform] || platform || "Unknown",
        subtitle: url,
        media: EarthGlobeIcon,
      };
    },
  },
});
