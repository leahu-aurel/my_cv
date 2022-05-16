import classNames from "classnames";
import Image from "next/image";

import aurel from "assets/aurel.jpeg";
import aurel1 from "assets/aurel1.jpeg";
import aurel2 from "assets/aurel2.jpeg";

import styles from "./styles.module.scss";

const Background = () => {
  const skillsStyles = classNames(styles.message, styles.skill);

  return (
    <>
      <section id="background" className={styles.background}>
        <div className={styles.info}>
          <p className={styles.title}>― MY BACKGROUND</p>
          <span className={styles.message}>
            I've started my IT career as a Python Backend and Scripting
            developer. After a while I discovered for myself the beauty of
            frontend. Now I'm in love with one of its most beautiful creations,
            React. Now I'm on my way to become an expert in this area.
          </span>
        </div>
        <div className={styles.skills}>
          <p className={styles.title}>― SKILLS</p>
          <p className={skillsStyles}>React/Redux</p>
          <p className={skillsStyles}>SASS/SCSS/CSS-IN-JS</p>
          <p className={skillsStyles}>Bash/Git</p>
          <p className={skillsStyles}>Javascript</p>
        </div>
      </section>
      <section className={styles.images}>
        <div className={classNames(styles.image, styles.sidePhoto)}>
          <Image
            quality={100}
            layout="fill"
            objectFit="cover"
            src={aurel1}
          ></Image>
        </div>
        <div className={styles.image}>
          <Image
            layout="fill"
            quality={100}
            objectFit="cover"
            src={aurel}
          ></Image>
        </div>
        <div className={classNames(styles.image, styles.sidePhoto)}>
          <Image
            layout="fill"
            quality={100}
            objectFit="cover"
            src={aurel2}
          ></Image>
        </div>
      </section>
    </>
  );
};

export default Background;
