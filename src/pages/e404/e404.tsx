import { Htag } from "ui";
import { Link } from "react-router-dom";
import styles from "./e404.module.sass";

export const E404 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fourHundredFour}>
        <span className={styles.number}>4</span>
        <span className={styles.onion}></span>
        <span className={styles.number}>4</span>
      </div>
      <Htag size="m" className={styles.title}>
        Кажется что-то пошло не так!
      </Htag>
      <p className={styles.message}>
        Страница, которую вы запрашиваете не существует. Возможно она была
        удалена, или вы ввели неверный адрес.
      </p>
      <Link to="/" replace>
        На главную
      </Link>
    </div>
  );
};
