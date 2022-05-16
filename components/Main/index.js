import Image from "next/image";

import mainImage from "assets/aurel.jpeg";

import styles from "./styles.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <div className={styles.firstContainer}>
          <p className={styles.title}>Hi, I am Aurel, a UI developer</p>
          <a className={styles.button}>Email me</a>
        </div>
        <div>
          <a className={styles.link}>Linkedin</a> /{" "}
          <a className={styles.link}>Facebook</a> /{" "}
          <a className={styles.link}>Twitter</a>
        </div>
      </div>
      <div className={styles.image}>
        <Image layout="responsive" objectFit="cover" src={mainImage} />
      </div>
    </main>
  );
};

export default Main;
