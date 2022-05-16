import styles from "./styles.module.scss";

function Quote() {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>
        “Whenever I am in a difficult situation where there seems to be no way
        out, I think about all the times I have been in such situations and say
        to myself: I did it before, so I can do it again.”
      </p>
      <p className={styles.author}>- Idowu Koyenikan</p>
    </div>
  );
}

export default Quote;
