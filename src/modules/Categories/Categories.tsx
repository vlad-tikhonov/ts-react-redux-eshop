import { Container } from "layouts";
import { Breadcrumbs, Htag, Text } from "components";
import { BreadcrumbItem } from "types/componets-types";
import { useCategories } from "features/categories/use-categories";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Categories.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: "",
  },
];

export const Categories = () => {
  const [categories, { isLoading, error }] = useCategories();
  return (
    <div>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="xl" className={styles.title}>
          Каталог
        </Htag>
        {isLoading ? (
          <div>Loding data...</div>
        ) : (
          <div className={styles.catalog_items}>
            {categories.map((c, i) => (
              <div
                key={c._id}
                className={cn(
                  styles.catalog_item,
                  styles[`catalog_item_${c._id}`]
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
                  src={c._img}
                  alt={c.title}
                  className={styles.catalog_item_img}
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
