import Link from "next/link";
import Logo from "../../public/logo.svg";
import styles from "./Header.module.scss";
import { SidebarContext } from "../../contexts/Global/Sidebar";
import { useContext } from "react";

const Header = () => {
  const { isOpen, toggleOpen } = useContext(SidebarContext);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo width="145" height="33" className={styles.logo} />
        </a>
      </Link>
      <button className={styles["sidebar-toggle"]} onClick={() => toggleOpen!((prev) => !prev)}>
        Menu
      </button>
    </header>
  );
};

export default Header;
