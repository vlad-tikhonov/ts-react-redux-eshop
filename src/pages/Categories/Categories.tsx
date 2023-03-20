import { Container, Wrapper } from "layouts";
import { Breadcrumbs, Htag } from "ui";
import { BreadcrumbItem } from "types/componets-types";
import { useCategories } from "features/categories/use-categories";
import styles from "./Categories.module.sass";
import { CategoriesTile } from "./CategoriesTile/CategoriesTile";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: "",
  },
];

export const Categories = () => {
  const [categories, { isLoading, errors }] = useCategories();
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
          <CategoriesTile categories={categories} />
        )}
      </Container>
    </Wrapper>
  );
};
