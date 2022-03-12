import { IContentSectionText } from "../../../types/types";

const TextSection = (section: IContentSectionText) => {
  return <div>{section.heading}</div>;
};

export default TextSection;
