import { Product } from "types";
import { modifyPrice } from "helpers/utils";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./mini-product-card.module.sass";

interface MiniProductCardProps {
  image: Product["image"];
  title: Product["title"];
  price: Product["price"];
  link: string;
  className?: string;
}

export const MiniProductCard = ({
  image,
  title,
  price,
  link,
  className,
}: MiniProductCardProps) => {
  return (
    <div className={cn(styles.card, className)} title={title}>
      <Link to={link} className={styles.link}></Link>
      <div className={styles.header}>
        <img
          src={process.env.REACT_APP_STATIC_CONTENT_URL + image}
          alt={title}
        />
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>{modifyPrice(price)}</span>
      </div>
    </div>
  );
};
