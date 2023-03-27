import { SpecialOffers } from "./SpecialOffers/SpecialOffers";
import { DeliveryBanner } from "./DeliveryBanner/DeliveryBanner";
import { StoreMap } from "./StoreMap/StoreMap";
import { Articles } from "./Articles/Articles";
import { Novelties } from "./Novelties/Novelties";
import { Promotions } from "./Promotions/Promotions";
import styles from "./Home.module.sass";

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
