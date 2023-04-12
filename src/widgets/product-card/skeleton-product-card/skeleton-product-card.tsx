import styles from "./skeleton-product-card.module.sass";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Skeleton height={"100%"} width={"100%"} borderRadius={4} />
      </div>
      <div className={styles.footer}>
        <Skeleton height={"100%"} width={"100%"} borderRadius={4} />
      </div>
    </div>
  );
};
