import styles from "./styles.module.scss";

function Contacts() {
  return (
    <div id="contacts" className={styles.contacts}>
      <span className={styles.name}>Aurel L.</span>
      <div className={styles.info}>
        <p className={styles.title}>― SOCIALS</p>
        <a
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/aurel-leahu-706ba0174"
        >
          Linkedin
        </a>
        <a
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/leahuaurel"
        >
          Facebook
        </a>
        <a
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/leahu-aurel"
        >
          Github
        </a>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>― CONTACTS</p>
        <a className={styles.link}>
          <br />
        </a>
        <a
          target="_blank"
          href="mailto:leahuworld@gmail.com"
          className={styles.link}
        >
          leahuworld@gmail.com
        </a>
        <a href="tel:060075509" className={styles.link}>
          060075509
        </a>
      </div>
    </div>
  );
}

export default Contacts;
