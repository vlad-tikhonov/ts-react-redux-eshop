import { Container } from "layouts";
import { DeliveryBanner } from "modules/Home/components";
import { ProductsPanel } from "modules/Product/components";
import { usePromotions } from "features/promotions/use-promotions";
import styles from "./Home.module.sass";

export const Home = () => {
  const [promotions, { isLoading, error }] = usePromotions();
  console.log("render");
  return (
    <Container>
      <DeliveryBanner />
      <ProductsPanel
        products={promotions}
        title="Акции"
        className={styles.promotions}
      />
    </Container>
  );
};
