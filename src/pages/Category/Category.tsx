import { Container, Wrapper } from "layouts";
import { useParams } from "react-router-dom";
import { useCategory } from "features/categories/use-category";
import { Breadcrumbs, Htag } from "ui";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import { useProducts } from "features/products/use-products";
import styles from "./Category.module.sass";
import { ProductCard } from "modules/Product/components";

export const Category = () => {
  const { slug } = useParams();
  const category = useCategory(slug);
  const [products, { isLoading, error }] = useProducts(slug);

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: "Каталог",
      to: "/" + RoutesNames.Categories,
      end: true,
    },
    {
      label: category?.title,
      to: "",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <div>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="l" className={styles.title}>
            {category?.title}
          </Htag>
          <div className={styles.products}>
            {products.map((p) => (
              <ProductCard product={p} key={p._id} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
