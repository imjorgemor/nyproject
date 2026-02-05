import { defineType, defineField } from "sanity";
import { InlineIcon } from "@sanity/icons";

export const shopifyProductCarouselType = defineType({
  name: "shopifyProductCarousel",
  title: "Shopify Product Carousel",
  type: "object",
  icon: InlineIcon,
  fields: [
    defineField({
      name: "collection",
      title: "Shopify Collection",
      type: "reference",
      to: [{ type: "collection" }],
      validation: (rule) => rule.required(),
      description: "Select a Shopify collection to display products from",
    }),
  ],
  preview: {
    select: {
      collectionTitle: "collection.store.title",
    },
    prepare({ collectionTitle }) {
      return {
        title: collectionTitle || "No collection selected",
        subtitle: "Shopify Product Carousel",
        media: InlineIcon,
      };
    },
  },
});
