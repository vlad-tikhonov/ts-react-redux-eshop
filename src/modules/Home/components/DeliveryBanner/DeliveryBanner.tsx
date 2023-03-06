import cn from "classnames";
import { Htag } from "components";
import productPackageImg from "assets/images/products-package.png";
import styles from "./DeliveryBanner.module.sass";

interface DeliveryBannerProps {
  className?: string;
}

export const DeliveryBanner = ({ className }: DeliveryBannerProps) => (
  <div className={cn(className, styles.banner)}>
    <div className={styles.wrapper}>
      <img src={productPackageImg} alt="prod_package.png" />
      <Htag size="l">Доставка бесплатно от 1000 ₽</Htag>
    </div>
  </div>
);
