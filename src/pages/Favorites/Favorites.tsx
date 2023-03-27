import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { ProductCard } from "components";
import { BreadcrumbItem } from "types";
import { selectFavorites } from "store/favorites/favorites-selectors";
import styles from "./Favorites.module.sass";
import { useAppSelector } from "store/hooks";
import { FavoritesEmpty } from "./FavoritesEmpty/FavoritesEmpty";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Избранное",
    to: "",
  },
];

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);

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
