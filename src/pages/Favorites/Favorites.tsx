import { Htag } from "ui";
import { Breadcrumbs, ProductCard } from "widgets";
import { BreadcrumbItem } from "types";
import { FavoritesEmpty } from "./favorites-empty/favorites-empty";
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
