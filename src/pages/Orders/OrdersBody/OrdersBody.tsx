import { Order } from "types";
import { Text, Notice } from "ui";
import { ProductCard } from "components";
import { modifyPrice } from "helpers/utils";
import styles from "./OrdersBody.module.sass";

interface OrdersBodyProps {
  orders: Order[];
}

export const OrdersBody = ({ orders }: OrdersBodyProps) => {
  return (
    <>
      {orders.map((order) => (
        <div className={styles.order} key={order._id}>
          <div className={styles.order_header}>
            <div className={styles.left}>
              <Text size="l" bold className={styles.date}>
                {order.date}
              </Text>
              <Text size="l" bold className={styles.time}>
                {order.time}
              </Text>
              <Notice size="m" accent="gray">
                В процессе
              </Notice>
            </div>
            <div className={styles.right}>
              <Text size="l">{modifyPrice(order.total)}</Text>
            </div>
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
