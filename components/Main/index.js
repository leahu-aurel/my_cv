import Image from "next/image";

import mainImage from "assets/aurel.jpeg";

import styles from "./styles.module.scss";
const Main = () => {
  return (
    <main id="main" className={styles.main}>
      <div className={styles.text}>
        <div className={styles.firstContainer}>
          <p className={styles.title}>Hi, I am Aurel, a UI developer</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:leahuworld@gmail.com"
            className={styles.button}
          >
            Email me
          </a>
        </div>
        <div>
          <a
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aurel-leahu-706ba0174"
          >
            Linkedin
          </a>{" "}
          /{" "}
          <a
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/leahuaurel"
          >
            Facebook
          </a>{" "}
          /{" "}
          <a
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leahu-aurel"
          >
            Github
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          layout="responsive"
          objectFit="cover"
          quality={100}
          src={mainImage}
          alt="Image with my beautiful face"
        />
      </div>
    </main>
  );
};

export default Main;
