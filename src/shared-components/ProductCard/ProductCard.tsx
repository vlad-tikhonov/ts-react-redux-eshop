import { Rating } from "types";
import { Button } from "components";
import styles from "./ProductCard.module.sass";

interface ProductCardProps {
  title: string;
  price: string;
  discountPrice: string;
  rating: Rating;
  image: string;
}

export const ProductCard = ({
  title,
  price,
  discountPrice,
  rating,
  image,
}: ProductCardProps) => {
  console.log(title, price, discountPrice, rating, image);
  return (
    <div className={styles.card}>
      <div className="card_header">
        <img src={image} alt={title} />
      </div>
      <div className="card_body"></div>
      <div className="card_footer">
        <Button
          size="m"
          accent="secondary"
          decoration="outline"
          className={styles.card_footer_btn}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};
