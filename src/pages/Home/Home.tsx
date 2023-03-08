import { Container } from "layouts";
import { DeliveryBanner } from "modules/Home/components";
import { ProductsPanel } from "modules/Product/components";
import { usePromotions } from "features/promotions/use-promotions";
import styles from "./Home.module.sass";
import { useNovelties } from "features/novelties/use-novelties";

export const Home = () => {
  const [promotions, { isLoading: pIsLoading, error: pError }] =
    usePromotions();
  const [novelties, { isLoading: nIsLoading, error: nError }] = useNovelties();

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
    </Container>
  );
};
