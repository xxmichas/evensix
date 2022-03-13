import { ICTASection } from "../../types/types";
import CTAItem from "./CTAItem/CTAItem";
import styles from "./CTASection.module.scss";

const CTASection = ({ order, section }: { order: number; section: ICTASection }) => {
  return (
    <section style={{ order }} className={styles.cta}>
      <CTAItem {...section.item1} pos="left" />
      <CTAItem {...section.item2} pos="right" />
    </section>
  );
};

export default CTASection;
