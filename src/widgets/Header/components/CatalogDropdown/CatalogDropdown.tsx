import cn from "classnames";
import styles from "./CatalogDropdown.module.sass";
import { Link } from "react-router-dom";
import { Text } from "ui";
import { useCategories } from "features/categories/use-categories";

interface CatalogDropdownProps {
  isOpen: boolean;
  className?: string;
}

export const CatalogDropdown = ({
  isOpen,
  className,
}: CatalogDropdownProps) => {
  const [categories] = useCategories();

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
        {categories.map((c) => (
          <li key={c._id} className={styles.item}>
            <Text size="s" bold className={styles.text}>
              {c.title}
            </Text>
            <Link to={`/categories/${c.slug}`} className={styles.link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
