import { Htag } from "ui";
import cardImg from "assets/images/card.jpg";
import cartImg from "assets/images/cart.png";
import styles from "./special-offers.module.sass";

interface SpecialOffersProps {
  className?: string;
}

export const SpecialOffers = ({ className }: SpecialOffersProps) => (
  <div className={className}>
    <Htag size="m" className={styles.title}>
      Специальные предложения
    </Htag>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h3 className={styles.text_title}>Оформите карту «Северяночка»</h3>
          <p className={styles.text_paragraph}>
            И получайте бонусы при покупке в магазинах и на сайте
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cardImg} alt="shop-card" className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <h3 className={styles.text_title}>Покупайте акционные товары</h3>
          <p className={styles.text_paragraph}>
            И получайте вдвое больше бонусов
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cartImg} alt="shop-cart" className={styles.img} />
        </div>
      </div>
    </div>
  </div>
);
