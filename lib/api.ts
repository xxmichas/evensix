import client from "../sanity-client";
import { INavLinks } from "../types/types";

// const hardcodedNavLinks: INavLinks[] = [
//   { name: "Commercial", link: "/commercial" },
//   { name: "Tourers", link: "/tourers" },
//   { name: "Our history", link: "/history" },
//   { name: "Get in touch", link: "/contact" },
// ];

export interface ILandingPageConfig {
  title: string;
  navLinks: INavLinks[];
}

export const getLandingPageConfig = async (): Promise<ILandingPageConfig> => {
  const data = (
    await client.fetch(`*[_id == "landingPageConfig"]{pageTitle, navBuilder[]{name, link}}`)
  )[0];

  return {
    title: data.pageTitle ?? "Page Title Can Be Edited In Sanity Studio",
    navLinks: data.navBuilder ?? [],
  };
};
