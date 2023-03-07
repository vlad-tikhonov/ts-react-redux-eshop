import { Breadcrumbs, Htag } from "components";
import { ProductCard } from "modules/Product/components";
import { Container, Wrapper } from "layouts";
import { BreadcrumbItem } from "types";
import { selectFavorites } from "features/favorites/favorites-selectors";
import styles from "./Favorites.module.sass";
import { useAppSelector } from "app/hooks";

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
        <Htag size="l" className={styles.title}>
          Избранное
        </Htag>
        <div className={styles.favorites}>
          {favorites.map((f) => (
            <ProductCard product={f} key={f._id} />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};
