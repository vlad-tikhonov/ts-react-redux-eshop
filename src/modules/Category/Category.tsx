import { Container } from "layouts";
import { useParams } from "react-router-dom";
import { useCategory } from "features/categories/use-category";
import { Breadcrumbs, Htag } from "components";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import { useProducts } from "features/products/use-products";
import { ProductCard } from "shared-components";
import styles from "./Category.module.sass";

const category = {
  title: "[category-name]",
};

export const Category = () => {
  const { slug } = useParams();
  console.log(slug);
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
    <div className={styles.wrapper}>
      <Container>
        <div>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="l" className={styles.title}>
            {category?.title}
          </Htag>
          <div className={styles.products}>
            {products.map((p) => (
              <ProductCard
                image={p.image}
                price={p.price}
                discount={p.discount}
                rating={p.rating}
                title={p.title}
                categorySlug={p.categorySlug}
                slug={p.slug}
                key={p._id}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
