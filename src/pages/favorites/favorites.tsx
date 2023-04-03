import { Htag } from "ui";
import { Breadcrumbs, ProductsGrid } from "widgets";
import { FavoritesEmpty } from "./favorites-empty/favorites-empty";
import { BreadcrumbItem } from "types";
import { useFavorites } from "store/favorites/features";
import styles from "./favorites.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Избранное",
    to: "",
  },
];

export const Favorites = () => {
  const favorites = useFavorites();

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {favorites.length ? (
        <>
          <Htag size="l" className={styles.title}>
            Избранное
          </Htag>
          <ProductsGrid products={favorites} />
        </>
      ) : (
        <FavoritesEmpty />
      )}
    </>
  );
};
