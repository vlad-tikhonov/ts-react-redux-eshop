import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types/componets-types";
import { useCategories } from "store/categories/features/use-categories";
import { CategoriesTile } from "./categories-tile/categories-tile";
import { ErrorDetecter } from "components";
import { useLocation } from "react-router-dom";
import styles from "./categories.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: "",
  },
];

const Categories = () => {
  const location = useLocation();
  const [categories, { isLoading, errors }] = useCategories();

  return (
    <ErrorDetecter errors={errors} pathname={location.pathname}>
      <>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="xl" className={styles.title}>
          Каталог
        </Htag>
        {isLoading ? (
          <div>Loding data...</div>
        ) : (
          <CategoriesTile categories={categories} />
        )}
      </>
    </ErrorDetecter>
  );
};

export default Categories;
