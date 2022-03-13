import {
  IContentSection,
  IContentSectionCards,
  IContentSectionImage,
  IContentSectionText,
} from "../../types/types";
import CardsSection from "./CardsSection/CardsSection";
import ImageSection from "./ImageSection/ImageSection";
import TextSection from "./TextSection/TextSection";

const ContentSection = ({ order, item }: { order: number; item: IContentSection }) => {
  let section = null;
  switch (item._type) {
    case "contentSectionText":
      section = <TextSection {...(item as IContentSectionText)} />;
      break;

    case "contentSectionCards":
      section = <CardsSection {...(item as IContentSectionCards)} />;
      break;

    case "contentSectionImage":
      section = <ImageSection {...(item as IContentSectionImage)} />;
      break;
  }
  return <section style={{ order }}>{section}</section>;
};

export default ContentSection;
