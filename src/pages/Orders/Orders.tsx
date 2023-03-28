import { useOrders } from "store/orders/features";
import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { BreadcrumbItem } from "types";
import { UnauthOrders } from "./UnauthOrders/UnauthOrders";
import { EmptyOrders } from "./EmptyOrders/EmptyOrders";
import { OrdersBody } from "./OrdersBody/OrdersBody";
import { useLocation } from "react-router-dom";
import { ErrorDetecter } from "components";
import { useUserId } from "store/auth/features";
import styles from "./Orders.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Заказы", to: "/orders", end: true },
];

export const Orders = () => {
  const location = useLocation();

  const userId = useUserId();
  const [orders, { isLoading, errors }] = useOrders(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorDetecter errors={errors} pathname={location.pathname}>
      <>
        <Breadcrumbs items={breadcrumbItems} />
        {!userId ? (
          <UnauthOrders />
        ) : (
          <>
            <Htag size="xl" className={styles.title}>
              Заказы
            </Htag>
            {orders.length ? <OrdersBody orders={orders} /> : <EmptyOrders />}
          </>
        )}
      </>
    </ErrorDetecter>
  );
};
