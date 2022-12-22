import { Container } from "layouts";
import { useParams } from "react-router-dom";
import { useCategory } from "features/categories/use-category";
import { Breadcrumbs, Htag } from "components";
import { RoutesNames } from "constants/routes-names";
import { BreadcrumbItem } from "types";
import styles from "./Category.module.sass";

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

  console.log(category);

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
