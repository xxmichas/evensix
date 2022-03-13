import { ICard, Iimage } from "../../../../types/types";
import styles from "./Card.module.scss";
import Image from "next/image";
import { getImageData } from "../../../../lib/api";
import Button from "../../../Button/Button";

const Card = (card: ICard) => {
  return (
    <div style={{ background: card.backgroundColor }} className={styles.card}>
      <Image
        alt={(card.image as Iimage).alt}
        src={getImageData(card.image as string).url()}
        layout="fill"
        objectFit="contain"
        className={styles.image}
        priority={true}
      />
      <div className={styles["card-content"]}>
        <h4>{card.heading}</h4>
        <p>{card.description}</p>
        <Button {...card.button} />
      </div>
    </div>
  );
};

export default Card;
