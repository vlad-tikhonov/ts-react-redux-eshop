import { Container } from "layouts";
import { useParams } from "react-router-dom";
import { useCategory } from "features/categories/use-category";
import { Breadcrumbs, Htag } from "components";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import { useProducts } from "features/products/use-products";
import styles from "./Category.module.sass";

const category = {
  title: "[category-name]",
};

export const Category = () => {
  const { slug } = useParams();
  // const category = useCategory(slug);

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
    <div>
      <Container>
        <div>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="l">{category?.title}</Htag>
          <pre>
            {products.map((p) => (
              <p>{p.title}</p>
            ))}
          </pre>
        </div>
      </Container>
    </div>
  );
};
