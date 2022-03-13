import { IContentSectionImage, Iimage } from "../../../types/types";
import Image from "next/image";
import { getImageData } from "../../../lib/api";
import styles from "./ImageSection.module.scss";

const ImageSection = (section: IContentSectionImage) => {
  return (
    <div className={styles.section}>
      <Image
        alt={(section.image as Iimage).alt}
        src={getImageData(section.image as string).url()}
        layout="fill"
        objectFit="contain"
        className={styles.image}
        priority={true}
      />
    </div>
  );
};

export default ImageSection;
