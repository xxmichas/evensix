import Link from "next/link";
import { INavLinks } from "../../types/types";
import styles from "./NavItem.module.scss";

const NavItem = ({ name, link }: INavLinks) => {
  return (
    <Link href={link}>
      <a className={styles["--nav-link"]}>{name}</a>
    </Link>
  );
};

export default NavItem;
