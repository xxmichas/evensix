import { IContentSectionCards } from "../../../types/types";
import Card from "./Card/Card";
import styles from "./CardsSection.module.scss";

const CardsSection = (section: IContentSectionCards) => {
  return (
    <div className={styles.section}>
      <h3>{section.heading}</h3>

      <div className={styles.cards}>
        {section.cards.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
