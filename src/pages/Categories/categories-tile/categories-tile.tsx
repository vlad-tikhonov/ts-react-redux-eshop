import cn from "classnames";
import { Text } from "ui";
import { Category } from "types";
import { Link } from "react-router-dom";
import styles from "./categories-tile.module.sass";

interface CategoriesTileProps {
  categories: Category[];
}

export const CategoriesTile = ({ categories }: CategoriesTileProps) => {
  return (
    <div className={styles.catalog_items}>
      {categories.map((c) => (
        <div
          key={c._id}
          className={cn(
            styles.catalog_item,
            styles[`catalog_item_${c.orderId}`]
          )}
        >
          <Link
            to={`/categories/${c.slug}`}
            className={styles.catalog_item_link}
          >
            <Text size="m" bold className={styles.catalog_item_title}>
              {c.title}
            </Text>
          </Link>
          <img
            src={`${process.env.REACT_APP_STATIC_CONTENT_URL}/${c.image}`}
            alt={c.title}
            className={styles.catalog_item_img}
          />
        </div>
      ))}
    </div>
  );
};
