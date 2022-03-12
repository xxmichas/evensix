import { IContentSection, IContentSectionText } from "../../types/types";
import TextSection from "./TextSection/TextSection";

const ContentSection = ({ order, item }: { order: number; item: IContentSection }) => {
  let section = null;
  switch (item._type) {
    case "contentSectionText":
      section = <TextSection {...(item as IContentSectionText)} />;
      break;
  }
  return <section style={{ order }}>{section}</section>;
};

export default ContentSection;
