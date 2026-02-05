import { defineField, defineType, defineArrayMember } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const productConfigurationType = defineType({
  name: "productConfiguration",
  title: "Product Configuration",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "lensCategories",
      title: "Lens Categories",
      description: "Configure lens options and pricing by category",
      type: "array",
      of: [defineArrayMember({ type: "lensOptions" })],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Product Configuration", media: PackageIcon };
    },
  },
});
