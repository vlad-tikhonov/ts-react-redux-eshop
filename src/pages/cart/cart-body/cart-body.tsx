import { useState } from "react";
import { CartProducts } from "./cart-products/cart-products";
import { CartDelivery } from "./cart-delivery/cart-delivery";

export const CartBody = () => {
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
          onSubmit={() => {
            setIsShowDelivery(true);
          }}
        />
      )}
    </>
  );
};
