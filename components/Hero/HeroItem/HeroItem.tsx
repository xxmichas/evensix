import { IHeroItem, Iimage } from "../../../types/types";
import Image from "next/image";
import { getImageData } from "../../../lib/api";
import styles from "./HeroItem.module.scss";
import Badge from "../../Badge/Badge";

const HeroItem = (item: IHeroItem) => {
  const imageData = getImageData(item.image as string);
  return (
    <div className={styles.wrapper}>
      <Image
        alt={(item.image as Iimage).alt}
        src={imageData.url()}
        layout="fill"
        objectFit="contain"
        className={styles.image}
        priority={true}
      />
      <Badge className={styles.badge} text={item.hoverText} description={item.hoverDescription} />
    </div>
  );
};

export default HeroItem;
