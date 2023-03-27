import { useState } from "react";
import { CartProducts } from "./CartProducts/CartProducts";
import { CartDelivery } from "./CartDelivery/CartDelivery";

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
