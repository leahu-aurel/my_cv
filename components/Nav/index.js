import classNames from "classnames";

import styles from "./styles.module.scss";
import { useWindowScroll } from "./useWindowScroll";

const Nav = () => {
  const scrolled = useWindowScroll();
  const navClassNames = classNames(styles.nav, scrolled && styles.scrolled);

  return (
    <nav className={navClassNames}>
      <a className={classNames(styles.link, styles.mainLink)}>AUREL</a>
      <a className={classNames(styles.link, styles.secondaryLink)}>ABOUT ME</a>
      <a className={classNames(styles.link, styles.secondaryLink)}>
        EXPERIENCE
      </a>
      <a className={classNames(styles.link, styles.secondaryLink)}>CONTACTS</a>
    </nav>
  );
};

export default Nav;
