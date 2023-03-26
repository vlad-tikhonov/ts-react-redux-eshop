import { Container, Wrapper } from "layouts";
import { useAppSelector } from "store/hooks";
import styles from "./Orders.module.sass";
import { selectUserId } from "store/auth/auth-selectors";
import { useOrders } from "store/orders/use-orders";
import { Htag, Text, Notice } from "ui";
import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types";
import { modifyPrice } from "helpers/utils";
import { ProductCard } from "components";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Заказы", to: "/orders", end: true },
];

export const Orders = () => {
  const userId = useAppSelector(selectUserId);
  const [orders, { isLoading, errors }] = useOrders(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Some error</div>;
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="xl" className={styles.title}>
            Заказы
          </Htag>
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
                    key={productInfo.product._id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};
