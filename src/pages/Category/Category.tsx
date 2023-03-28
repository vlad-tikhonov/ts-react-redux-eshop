import { useLocation, useParams } from "react-router-dom";
import { useCategory } from "store/categories/use-category";
import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import { useProducts } from "store/products/use-products";
import styles from "./Category.module.sass";
import { ErrorDetecter, ProductCard } from "components";

export const Category = () => {
  const { slug } = useParams();
  const location = useLocation();
  const category = useCategory(slug);
  const [products, { isLoading, errors }] = useProducts(slug);

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
    <ErrorDetecter errors={errors} pathname={location.pathname}>
      <>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="l" className={styles.title}>
          {category?.title}
        </Htag>
        <div className={styles.products}>
          {products.map((p) => (
            <ProductCard product={p} key={p._id} />
          ))}
        </div>
      </>
    </ErrorDetecter>
  );
};
