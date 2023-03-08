import { Htag, Text } from "ui";
import styles from "./SpecialOffers.module.sass";
import cardImg from "assets/images/card.jpg";
import cartImg from "assets/images/cart.png";

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
          <Htag size="s">Оформите карту «Северяночка»</Htag>
          <Text size="s">
            И получайте бонусы при покупке в магазинах и на сайте
          </Text>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cardImg} alt="shop-card" className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <Htag size="s">Покупайте акционные товары</Htag>
          <Text size="s">И получайте вдвое больше бонусов</Text>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cartImg} alt="shop-cart" className={styles.img} />
        </div>
      </div>
    </div>
  </div>
);
