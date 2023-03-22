import { useState } from "react";
import { CartProduct } from "types";
import { CartProducts } from "./CartProducts/CartProducts";
import { CartDelivery } from "./CartDelivery/CartDelivery";
import styles from "./CartBody.module.sass";
import cn from "classnames";

interface CartBodyProps {
  products: CartProduct[];
  productsCount: number;
  className: string;
}

export const CartBody = ({
  products,
  productsCount,
  className,
}: CartBodyProps) => {
  const [isShowDelivery, setIsShowDelivery] = useState(true);

  return (
    <>
      {isShowDelivery ? (
        <CartDelivery
          toBack={() => {
            setIsShowDelivery(false);
          }}
        />
      ) : (
        <CartProducts
          products={products}
          onSubmit={() => {
            setIsShowDelivery(true);
          }}
        />
      )}
    </>
  );
};
