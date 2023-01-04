import { Container } from "layouts";
import { useParams } from "react-router-dom";
import { useCategory } from "features/categories/use-category";
import { Breadcrumbs, Htag } from "components";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import styles from "./Category.module.sass";

import { useAppDispatch } from "app/hooks";
import { loadProducts } from "features/products/products-slice";
import { useEffect } from "react";

export const Category = () => {
  const { slug } = useParams();
  const category = useCategory(slug);

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

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug) {
      const filters = {
        category_slug: { exact: slug },
        price: { gte: 0 },
        _price: { lte: 9999 },
      };

      dispatch(
        loadProducts({
          filters,
          perPage: "6",
          page: "1",
        })
      );
    }
  }, [slug]);

  return (
    <div>
      <Container>
        <div>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="l">{category?.title}</Htag>
        </div>
      </Container>
    </div>
  );
};
