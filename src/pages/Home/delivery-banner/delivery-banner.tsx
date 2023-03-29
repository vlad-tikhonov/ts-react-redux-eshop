import cn from "classnames";
import productPackageImg from "assets/images/products-package.png";
import styles from "./delivery-banner.module.sass";

interface DeliveryBannerProps {
  className?: string;
}

export const DeliveryBanner = ({ className }: DeliveryBannerProps) => (
  <div className={cn(styles.banner, className)}>
    <div className={styles.wrapper}>
      <img src={productPackageImg} alt="prod_package.png" />
      <h2 className={styles.title}>Доставка бесплатно от 1000 ₽</h2>
      {/* <Htag size="l">Доставка бесплатно от 1000 ₽</Htag> */}
    </div>
  </div>
);
