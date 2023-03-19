import { Container } from "layouts";
import { DeliveryBanner, SpecialOffers } from "modules/Home/components";
import { ProductsPanel } from "modules/Product/components";
import { usePromotions } from "features/promotions/use-promotions";
import { useNovelties } from "features/novelties/use-novelties";
import styles from "./Home.module.sass";
import { StoreMap, Articles } from "modules/Home/widgets";

export const Home = () => {
  const [promotions, { isLoading: pIsLoading, errors: pErrors }] =
    usePromotions();
  const [novelties, { isLoading: nIsLoading, errors: nErrors }] =
    useNovelties();
  return (
    <Container>
      <DeliveryBanner />
      <ProductsPanel
        products={promotions}
        title="Акции"
        className={styles.promotions}
      />
      <ProductsPanel
        products={novelties}
        title="Новинки"
        className={styles.novelties}
      />
      <StoreMap />
      <SpecialOffers className={styles.offers} />
      <Articles />
    </Container>
  );
};
