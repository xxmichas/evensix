import NavItem from "../NavItem/NavItem";
import { INavLinks } from "../../types/types";
import styles from "./Sidebar.module.scss";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/Global/Sidebar";

const Sidebar = ({ navLinks }: { navLinks: INavLinks[] }) => {
  const { isOpen, toggleOpen } = useContext(SidebarContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={() => toggleOpen!(false)} className={styles.backdrop}>
      <aside className={styles.sidebar}>
        <div className={styles.wrapper}>
          {navLinks.map((el, i) => (
            <NavItem key={i} name={el.name} link={el.link} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
