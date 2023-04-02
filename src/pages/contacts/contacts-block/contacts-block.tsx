import cn from "classnames";
import styles from "./contacts-block.module.sass";

interface ContactsBlockProps {
  className?: string;
}

export const ContactsBlock = ({ className }: ContactsBlockProps) => {
  return (
    <ul className={cn(styles.contacts, className)}>
      <li className={cn(styles.item, styles.item_1)}>
        <span className={styles.title}>Бухгалтерия, склад</span>
        <span className={styles.phone}>+7 82140 92619</span>
      </li>
      <li className={cn(styles.item, styles.item_2)}>
        <span className={styles.title}>Вопросы по системе лояльности</span>
        <span className={styles.phone}>+7 908 716 33 97</span>
      </li>
    </ul>
  );
};
