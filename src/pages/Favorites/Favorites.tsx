import { Breadcrumbs, Htag } from "ui";
import { ProductCard } from "modules/Product/components";
import { Container, Wrapper } from "layouts";
import { BreadcrumbItem } from "types";
import { selectFavorites } from "features/favorites/favorites-selectors";
import styles from "./Favorites.module.sass";
import { useAppSelector } from "app/hooks";
import { ReactComponent as HeartIcon } from "assets/icons/heart-filled.svg";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Избранное",
    to: "",
  },
];

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);

  if (favorites.length === 0) {
    return (
      <Wrapper>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <div className={styles.empty}>
            <Htag size="xs" className={styles.noProdTitle}>
              В Избранном пока ничего нет
            </Htag>
            <span className={styles.text}>
              Добавляйте товары в Избранное с помощью
            </span>
            <HeartIcon className={styles.icon} />
          </div>
        </Container>
      </Wrapper>
    );
  }

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
