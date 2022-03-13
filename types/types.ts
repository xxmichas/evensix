export interface INavLinks {
  name: string;
  link: string;
}

export type LandingPageContent = IContentSection;

export interface IHeroSection extends IContentSection {
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

export interface IContentSection {
  ["_key"]: string;
  ["_type"]: string;
}

export interface IContentSectionCards extends IContentSection {
  heading: string;
  cards: ICard[];
}

export interface IContentSectionText extends IContentSection {
  heading: string;
  textLeft: any;
  textRight: any;
}

export interface IContentSectionImage extends IContentSection {
  image: Iimage | string;
}

export interface ICard {
  backgroundColor: string;
  button: IButton;
  heading: string;
  description: string;
  image: Iimage | string;
}

export interface ICTASection extends IContentSection {
  item1: ICTAItem;
  item2: ICTAItem;
}

export interface ICTAItem {
  textColor: string;
  backgroundColor: string;
  image: Iimage | string;
  link: string;
  linkText: string;
  text: string;
}
