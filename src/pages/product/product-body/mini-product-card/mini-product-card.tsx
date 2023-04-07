import { Product } from "types";
import { modifyPrice } from "helpers/utils";
import { Link } from "react-router-dom";
import cn from "classnames";
import { STATIC_CONTENT_URL } from "constants/static-content-url";
import styles from "./mini-product-card.module.sass";
import { Card, CardHeader, CardFooter, CardProps } from "components";
import { useState } from "react";

interface MiniProductCardProps extends CardProps {
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
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <Card
      title={title}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      isActive={isActive}
      className={cn(styles.card, className)}
    >
      <CardHeader className={styles.header}>
        <img src={STATIC_CONTENT_URL + image} alt={title} />
      </CardHeader>
      <CardFooter className={styles.footer}>
        <span className={styles.price}>{modifyPrice(price)}</span>
      </CardFooter>
      <Link to={link} className={styles.link}></Link>
    </Card>
  );
};
