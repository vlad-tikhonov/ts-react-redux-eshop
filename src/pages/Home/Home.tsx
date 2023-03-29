import { SpecialOffers } from "./special-offers/special-offers";
import { DeliveryBanner } from "./delivery-banner/delivery-banner";
import { StoreMap } from "./store-map/store-map";
import { Articles } from "./articles/articles";
import { Novelties } from "./novelties/novelties";
import { Promotions } from "./promotions/promotions";
import styles from "./home.module.sass";

export const Home = () => {
  return (
    <>
      <DeliveryBanner className={styles.banner} />
      <Promotions className={styles.promotions} />
      <Novelties className={styles.novelties} />
      <StoreMap className={styles.stores} />
      <SpecialOffers className={styles.offers} />
      <Articles />
    </>
  );
};
