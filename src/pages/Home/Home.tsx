import { SpecialOffers } from "./SpecialOffers/SpecialOffers";
import { DeliveryBanner } from "./DeliveryBanner/DeliveryBanner";
import { ProductsPanel } from "widgets";
import { StoreMap } from "./StoreMap/StoreMap";
import { Articles } from "./Articles/Articles";
import { usePromotions } from "store/promotions/use-promotions";
import { useNovelties } from "store/novelties/use-novelties";
import styles from "./Home.module.sass";

export const Home = () => {
  const [promotions, { isLoading: pIsLoading, errors: pErrors }] =
    usePromotions();
  const [novelties, { isLoading: nIsLoading, errors: nErrors }] =
    useNovelties();
  return (
    <>
      <DeliveryBanner className={styles.banner} />
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
    </>
  );
};
