import {
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    page: defineLocations({
      select: {
        title: "title",
        slug: "url.current",
        pathPrefix: "pathPrefix",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href:
              doc?.pathPrefix === "home"
                ? "/"
                : `/${doc?.pathPrefix || "pages"}/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
};
