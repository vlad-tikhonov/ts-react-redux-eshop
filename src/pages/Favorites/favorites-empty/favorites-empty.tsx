import { Htag } from "ui";
import { ReactComponent as HeartIcon } from "assets/icons/heart-filled.svg";
import styles from "./favorites-empty.module.sass";

export const FavoritesEmpty = () => {
  return (
    <div className={styles.favorites}>
      <Htag size="xs" className={styles.noProdTitle}>
        В Избранном пока ничего нет
      </Htag>
      <span className={styles.text}>
        Добавляйте товары в Избранное с помощью
      </span>
      <HeartIcon className={styles.icon} />
    </div>
  );
};
