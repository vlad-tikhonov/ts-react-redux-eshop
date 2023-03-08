import { Container, Wrapper } from "layouts";
import { Breadcrumbs, Htag, Text } from "ui";
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
    <Wrapper>
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="xl" className={styles.title}>
          Каталог
        </Htag>
        {isLoading ? (
          <div>Loding data...</div>
        ) : (
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
        )}
      </Container>
    </Wrapper>
  );
};
