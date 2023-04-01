import cn from "classnames";
import styles from "./details-block.module.sass";

interface DetailsBlockProps {
  className?: string;
}

export const DetailsBlock = ({ className }: DetailsBlockProps) => {
  return (
    <ul className={cn(styles.details, className)}>
      <li className={cn(styles.item, styles.item_1)}>
        <span className={styles.first}>Мы занимаемся розничной торговлей</span>
        <br />
        <span className={styles.second}>Более 20 лет.</span>
      </li>
      <li className={cn(styles.item, styles.item_2)}>
        <span className={styles.first}>Основная миссия компании</span>
        <br />
        <span className={styles.second}>
          Максимальное качество товаров и услуг по доступной цене.
        </span>
      </li>
      <li className={cn(styles.item, styles.item_3)}>
        <span className={styles.first}>Отличительная черта нашей сети</span>
        <br />
        <span className={styles.second}>
          Здоровая и полезная продукция местного производства внаших магазинах.
        </span>
      </li>
    </ul>
  );
};
