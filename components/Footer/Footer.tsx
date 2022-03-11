import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <Link href="/privacy">
        <a className={styles["--footer-link"]}>Privacy Policy</a>
      </Link>
      <Link href="/cookies">
        <a className={styles["--footer-link"]}>Cookie Policy</a>
      </Link>
      <span className={styles["--footer-link"]}>© 2022</span>
    </footer>
  );
};

export default Footer;
