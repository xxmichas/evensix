export interface INavLinks {
  name: string;
  link: string;
}

export interface ILandingPageContent {
  [key: string]: any;
}

export interface IHeroSection {
  ["_key"]: string;
  ["_type"]: string;
  button: IButton;
  heading: string;
  tagline: string;
  images: IHeroItem[];
}

export interface IButton {
  link: string;
  text: string;
  type: "basic" | "solid" | "outline";
}

export interface IHeroItem {
  hoverText: string;
  hoverDescription: string;
  image: Iimage | string;
}

export interface Iimage {
  alt: string;
}
