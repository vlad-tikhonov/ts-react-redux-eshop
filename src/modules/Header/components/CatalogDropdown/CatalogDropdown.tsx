import cn from "classnames";
import styles from "./CatalogDropdown.module.sass";
import { Category } from "types";
import { Link } from "react-router-dom";
import { Text } from "ui";

interface CatalogDropdownProps {
  isOpen: boolean;
  items: Category[];
  className?: string;
}

export const CatalogDropdown = ({
  isOpen,
  items,
  className,
}: CatalogDropdownProps) => {
  return (
    <div
      className={cn(
        {
          [styles.dropdown]: true,
          [styles.dropdown_isOpen]: isOpen,
        },
        className
      )}
    >
      <ul className={styles.items}>
        {items.map((i) => (
          <li key={i._id} className={styles.item}>
            <Text size="s" bold className={styles.text}>
              {i.title}
            </Text>
            <Link to={`/categories/${i.slug}`} className={styles.link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
