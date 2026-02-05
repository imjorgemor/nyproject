import { type SchemaTypeDefinition } from "sanity";

// Documents
import { pageType } from "./documents/page-type";

// Singletons
import { siteSettingsType } from "./singletons/site-settings-type";
import { headerType } from "./singletons/header-type";
import { navigationType } from "./singletons/navigation-type";
import { footerType } from "./singletons/footer-type";
import { productConfigurationType } from "./singletons/product-configuration-type";

// Page builder
import { pageBuilderType } from "./page-builder-type";

// Blocks
import { heroType } from "./blocks/hero-type";
import { carouselType } from "./blocks/carousel-type";
import { sectionType } from "./blocks/section-type";
import { imageWithContentType } from "./blocks/image-with-content-type";
import { tabbedContentType } from "./blocks/tabbed-content-type";
import { shopifyProductCarouselType } from "./blocks/shopify-product-carousel-type";
import { textSectionType } from "./blocks/text-section-type";
import { listSectionType } from "./blocks/list-section-type";
import { storesSectionType } from "./blocks/stores-section-type";

// Shopify
import { collectionType } from "./shopify/collection-type";

// Objects
import { linkType } from "./objects/link-type";
import { socialLinkType } from "./objects/social-link-type";
import { navItemType } from "./objects/nav-item-type";
import { footerColumnType } from "./objects/footer-column-type";
import { footerTextItemType } from "./objects/footer-text-item-type";
import { seoType } from "./objects/seo-type";
import { internalLinkType } from "./objects/internal-link-type";
import { lensOptionType } from "./objects/lens-option-type";
import { lensOptionsType } from "./objects/lens-options-type";
import { subscribeFormType } from "./objects/subscribe-form-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    pageType,
    // Singletons
    siteSettingsType,
    headerType,
    navigationType,
    footerType,
    productConfigurationType,
    // Page builder
    pageBuilderType,
    // Blocks
    heroType,
    carouselType,
    sectionType,
    imageWithContentType,
    tabbedContentType,
    shopifyProductCarouselType,
    textSectionType,
    listSectionType,
    storesSectionType,
    // Shopify
    collectionType,
    // Objects
    linkType,
    internalLinkType,
    socialLinkType,
    navItemType,
    footerColumnType,
    footerTextItemType,
    seoType,
    lensOptionType,
    lensOptionsType,
    subscribeFormType,
  ],
};
