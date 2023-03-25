import { useState } from "react";
import { CartProduct } from "types";
import { CartProducts } from "./CartProducts/CartProducts";
import { CartDelivery } from "./CartDelivery/CartDelivery";

interface CartBodyProps {
  products: CartProduct[];
  productsCount: number;
  className: string;
}

export const CartBody = ({ products }: CartBodyProps) => {
  const [isShowDelivery, setIsShowDelivery] = useState(false);

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
