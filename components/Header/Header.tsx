import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { SidebarContext } from "../../contexts/Global/Sidebar";
import { useContext } from "react";
import { INavLinks } from "../../types/types";
import NavItem from "../NavItem/NavItem";

const Header = ({ isDesktop, navLinks }: { isDesktop: boolean; navLinks: INavLinks[] }) => {
  const { toggleOpen } = useContext(SidebarContext);

  if (isDesktop) {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles["nav-list"]}>
            <li className={styles["logo-wrapper"]}>
              <Logo className={styles.logo} />
            </li>

            {navLinks.map((el, i) => (
              <li key={i}>
                <NavItem name={el.name} link={el.link} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  // Mobile
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <button className={styles["sidebar-toggle"]} onClick={() => toggleOpen!((prev) => !prev)}>
        Menu
      </button>
    </header>
  );
};

export default Header;
