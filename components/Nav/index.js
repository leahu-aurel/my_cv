import classNames from "classnames";
import Link from "next/link";

import styles from "./styles.module.scss";
import { useWindowScroll } from "./useWindowScroll";

const Nav = () => {
  const scrolled = useWindowScroll();
  const navClassNames = classNames(styles.nav, scrolled && styles.scrolled);

  return (
    <nav className={navClassNames}>
      <Link href="#main">
        <a className={classNames(styles.link, styles.mainLink)}>AUREL</a>
      </Link>
      <Link href="#background">
        <a className={classNames(styles.link, styles.secondaryLink)}>
          ABOUT ME
        </a>
      </Link>

      <Link href="#experience">
        <a className={classNames(styles.link, styles.secondaryLink)}>
          EXPERIENCE
        </a>
      </Link>

      <Link href="#contacts">
        <a className={classNames(styles.link, styles.secondaryLink)}>
          CONTACTS
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
