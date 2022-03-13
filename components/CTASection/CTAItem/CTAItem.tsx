import Image from "next/image";
import Link from "next/link";
import { getImageData } from "../../../lib/api";
import { ICTAItem, Iimage } from "../../../types/types";
import styles from "./CTAItem.module.scss";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const CTAItem = ({
  textColor,
  backgroundColor,
  image,
  link,
  linkText,
  text,
  pos,
}: ICTAItem & { pos: "left" | "right" }) => {
  return (
    <div className={`${styles.item} ${pos === "left" ? styles.left : null}`}>
      <div style={{ background: backgroundColor }} className={styles.background} />
      <div style={{ color: textColor }} className={styles.desc}>
        <h5>{text}</h5>
        <Link href={link ?? "/"}>
          <a>
            <h4>
              {pos === "left" ? <GoChevronLeft /> : null}
              {linkText}
              {pos === "right" ? <GoChevronRight /> : null}
            </h4>
          </a>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Image
          alt={(image as Iimage).alt}
          src={getImageData(image as string).url()}
          layout="fill"
          objectFit="contain"
          className={styles.image}
          priority={true}
        />
      </div>
    </div>
  );
};

export default CTAItem;
