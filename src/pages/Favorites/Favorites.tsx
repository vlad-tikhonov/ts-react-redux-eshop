import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { ProductCard } from "components";
import { BreadcrumbItem } from "types";
import styles from "./Favorites.module.sass";
import { FavoritesEmpty } from "./FavoritesEmpty/FavoritesEmpty";
import { useFavorites } from "store/favorites/features";

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
          <div className={styles.favorites}>
            {favorites.map((f) => (
              <ProductCard product={f} key={f._id} />
            ))}
          </div>
        </>
      ) : (
        <FavoritesEmpty />
      )}
    </>
  );
};
