import { defineType, defineField, defineArrayMember } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const carouselType = defineType({
  name: "carousel",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Optional title displayed above the carousel",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "carouselCard",
          title: "Card",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
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
              rows: 3,
            }),
            defineField({
              name: "badge",
              title: "Badge",
              type: "string",
              description: "Optional badge text (e.g., 'New', 'Featured')",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "reference",
              to: [{ type: "page" }],
              description: "Page to navigate to when card is clicked",
            }),
          ],
          preview: {
            select: {
              title: "title",
              badge: "badge",
              media: "image",
            },
            prepare({ title, badge, media }) {
              return {
                title: title || "Untitled Card",
                subtitle: badge ? `Badge: ${badge}` : undefined,
                media,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error("Add at least one card"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      cards: "cards",
    },
    prepare({ title, cards }) {
      const count = cards?.length || 0;
      return {
        title: title || "Carousel",
        subtitle: `${count} card${count === 1 ? "" : "s"}`,
        media: ImagesIcon,
      };
    },
  },
});
