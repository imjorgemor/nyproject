import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const collectionType = defineType({
  name: "collection",
  title: "Collection",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "store",
      title: "Shopify Store Data",
      type: "object",
      readOnly: true,
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "id", type: "number", title: "Shopify ID" }),
        defineField({ name: "gid", type: "string", title: "Global ID" }),
        defineField({
          name: "slug",
          type: "object",
          title: "Slug",
          fields: [defineField({ name: "current", type: "string" })],
        }),
        defineField({ name: "imageUrl", type: "string", title: "Image URL" }),
        defineField({
          name: "descriptionHtml",
          type: "text",
          title: "Description (HTML)",
        }),
        defineField({
          name: "isDeleted",
          type: "boolean",
          title: "Is Deleted",
          description: "Marked true when collection is deleted from Shopify",
        }),
        defineField({
          name: "syncedAt",
          type: "datetime",
          title: "Last Synced",
        }),
        defineField({
          name: "createdAt",
          type: "datetime",
          title: "Created At",
        }),
        defineField({
          name: "disjunctive",
          type: "boolean",
          title: "Disjunctive Rules",
          description: "If true, rules use ANY logic; if false, rules use ALL logic",
        }),
        defineField({
          name: "rules",
          type: "array",
          title: "Rules",
          description: "Automated collection rules from Shopify",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "column", type: "string", title: "Column" }),
                defineField({ name: "condition", type: "string", title: "Condition" }),
                defineField({ name: "relation", type: "string", title: "Relation" }),
              ],
            },
          ],
        }),
        defineField({
          name: "shop",
          type: "object",
          title: "Shop",
          fields: [
            defineField({ name: "domain", type: "string", title: "Domain" }),
          ],
        }),
        defineField({
          name: "sortOrder",
          type: "string",
          title: "Sort Order",
          description: "Collection sort order (e.g., CREATED_DESC)",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "store.title",
      imageUrl: "store.imageUrl",
      isDeleted: "store.isDeleted",
    },
    prepare({ title, imageUrl, isDeleted }) {
      return {
        title: isDeleted ? `[DELETED] ${title}` : title || "Untitled Collection",
        media: imageUrl ? <img src={imageUrl} alt={title || ""} /> : TagIcon,
      };
    },
  },
});
