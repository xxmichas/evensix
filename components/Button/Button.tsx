import Link from "next/link";
import { IButton } from "../../types/types";
import styles from "./Button.module.scss";

const Button = ({ text, link, type }: IButton) => {
  return (
    <Link href={link}>
      <a className={`${styles.btn} ${styles["--" + type]}`}>{text}</a>
    </Link>
  );
};

export default Button;
