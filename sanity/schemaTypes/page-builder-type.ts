import { defineType, defineArrayMember } from "sanity";
 
export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "hero" }),
    defineArrayMember({ type: "carousel" }),
    defineArrayMember({ type: "section" }),
    defineArrayMember({ type: "imageWithContent" }),
    defineArrayMember({ type: "tabbedContent" }),
    defineArrayMember({ type: "shopifyProductCarousel" }),
    defineArrayMember({ type: "textSection" }),
    defineArrayMember({ type: "listSection" }),
    defineArrayMember({ type: "storesSection" }),
  ],
  options: {
    insertMenu: {
      views: [
        {
          name: "grid",
          //previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
        },
      ],
    },
  },
});