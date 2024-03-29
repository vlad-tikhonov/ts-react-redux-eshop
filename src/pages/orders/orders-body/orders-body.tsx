import { Order } from "types";
import { Text } from "ui";
import { Notice } from "components";
import { ProductCard } from "widgets";
import { modifyPrice } from "helpers/utils";
import styles from "./orders-body.module.sass";

interface OrdersBodyProps {
  orders: Order[];
}

export const OrdersBody = ({ orders }: OrdersBodyProps) => {
  return (
    <>
      {orders.map((order) => (
        <div className={styles.order} key={order._id}>
          <div className={styles.order_header}>
            <Text size="l" bold className={styles.date}>
              {order.date}
            </Text>
            <Text size="l" bold className={styles.time}>
              {order.time}
            </Text>
            <Notice size="m" accent="gray">
              В процессе
            </Notice>
            <Text size="l" className={styles.total}>
              {modifyPrice(order.total)}
            </Text>
          </div>
          <div className={styles.order_products}>
            {order.products.map((productInfo) => (
              <ProductCard
                product={productInfo.product}
                countInOrder={productInfo.count}
                key={productInfo.product._id}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
