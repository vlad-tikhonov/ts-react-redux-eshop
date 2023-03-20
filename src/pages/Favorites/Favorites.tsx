import { Breadcrumbs, Htag } from "ui";
import { ProductCard } from "components";
import { Container, Wrapper } from "layouts";
import { BreadcrumbItem } from "types";
import { selectFavorites } from "features/favorites/favorites-selectors";
import styles from "./Favorites.module.sass";
import { useAppSelector } from "app/hooks";
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
    <Wrapper>
      <Container>
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
      </Container>
    </Wrapper>
  );
};
