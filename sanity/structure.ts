import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  MenuIcon,
  ThListIcon,
  BlockContentIcon,
  HomeIcon,
  TagIcon,
  DocumentIcon,
  PackageIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Configuration")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Site Configuration")
            .items([
              S.listItem()
                .title("Site Settings")
                .icon(CogIcon)
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                    .title("Site Settings"),
                ),
              S.listItem()
                .title("Header")
                .icon(MenuIcon)
                .child(
                  S.document()
                    .schemaType("header")
                    .documentId("header")
                    .title("Header"),
                ),
              S.listItem()
                .title("Navigation")
                .icon(ThListIcon)
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("navigation")
                    .title("Navigation"),
                ),
              S.listItem()
                .title("Footer")
                .icon(BlockContentIcon)
                .child(
                  S.document()
                    .schemaType("footer")
                    .documentId("footer")
                    .title("Footer"),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Product Configuration")
        .icon(PackageIcon)
        .child(
          S.document()
            .schemaType("productConfiguration")
            .documentId("productConfiguration")
            .title("Product Configuration"),
        ),
      S.divider(),
      // Home Page - singleton
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("page")
            .documentId("home")
            .title("Home Page")
            .initialValueTemplate("home-page"),
        ),
      // Collections Page - singleton
      S.listItem()
        .title("Collections")
        .icon(TagIcon)
        .child(
          S.documentList()
            .title("Collections")
            .schemaType("page")
            .filter('_type == "page" && pathPrefix == "collections"')
            .initialValueTemplates([
              S.initialValueTemplateItem("collections-page"),
            ])
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("page"),
            ),
        ),
      // Regular Pages
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.documentList()
            .title("Pages")
            .schemaType("page")
            .filter('_type == "page" && pathPrefix == "pages"')
            .initialValueTemplates([
              S.initialValueTemplateItem("pages-page"),
            ]),
        ),
    ]);
