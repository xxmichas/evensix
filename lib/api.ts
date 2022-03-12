import client from "../sanity-client";
import { ILandingPageContent, INavLinks } from "../types/types";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const getImageData = (source: string) => builder.image(source);

// const hardcodedNavLinks: INavLinks[] = [
//   { name: "Commercial", link: "/commercial" },
//   { name: "Tourers", link: "/tourers" },
//   { name: "Our history", link: "/history" },
//   { name: "Get in touch", link: "/contact" },
// ];

export interface ILandingPageConfig {
  title: string;
  content: ILandingPageContent[];
}

export const getNavLinks = async (): Promise<INavLinks[]> => {
  const data = (await client.fetch(`*[_id == "landingPageConfig"]{navBuilder[]{name, link}}`))[0];

  return data.navBuilder ?? [];
};

export const getLandingPageConfig = async (): Promise<ILandingPageConfig> => {
  const data = (await client.fetch(`*[_id == "landingPageConfig"]{pageTitle, pageBuilder}`))[0];

  return {
    title: data.pageTitle ?? "Page Title Can Be Edited In Sanity Studio",
    content: data.pageBuilder ?? [],
  };
};
