import { Product } from "types";
import styles from "./MiniProductCard.module.sass";
import { modifyPrice } from "helpers/utils";
import { Link } from "react-router-dom";
import { Text } from "ui";

interface MiniProductCardProps {
  image: Product["image"];
  title: Product["title"];
  price: Product["price"];
  link: string;
}

export const MiniProductCard = ({
  image,
  title,
  price,
  link,
}: MiniProductCardProps) => {
  return (
    <div className={styles.card} title={title}>
      <Link to={link} className={styles.link}></Link>
      <div className={styles.header}>
        <img
          src={process.env.REACT_APP_STATIC_CONTENT_URL + image}
          alt={title}
        />
      </div>
      <div className={styles.footer}>
        <Text size="m" bold className={styles.price}>
          {modifyPrice(price)}
        </Text>
      </div>
    </div>
  );
};
