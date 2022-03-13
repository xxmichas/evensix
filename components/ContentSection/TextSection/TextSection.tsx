import { IContentSectionText } from "../../../types/types";
import { PortableText } from "@portabletext/react";
import styles from "./TextSection.module.scss";

const TextSection = (section: IContentSectionText) => {
  return (
    <div className={styles.section}>
      <label>{section.heading}</label>
      <div className={styles.texts}>
        <PortableText value={section.textLeft} />
        <PortableText value={section.textRight} />
      </div>
    </div>
  );
};

export default TextSection;
