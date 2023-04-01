import styles from "./thank-block.module.sass";

export const ThankBlock = () => {
  return (
    <div className={styles.thank}>
      <div className={styles.logo}></div>
      <div className={styles.phrase}>
        <span className={styles.text}>
          Спасибо за то, что вы с нами. Северяночка, везет всегда!
        </span>
      </div>
    </div>
  );
};
