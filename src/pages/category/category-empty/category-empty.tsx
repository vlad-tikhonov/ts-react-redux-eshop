import { Text } from "ui";
import styles from "./category-empty.module.sass";

export const CategoryEmpty = () => {
  return (
    <div className={styles.wrapper}>
      <Text size="m" bold>
        В данной категории eще нет товаров
      </Text>
    </div>
  );
};
