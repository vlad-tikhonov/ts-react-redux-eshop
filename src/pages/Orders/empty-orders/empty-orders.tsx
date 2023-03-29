import { Link } from "react-router-dom";
import { Htag } from "ui";
import styles from "./empty-orders.module.sass";

export const EmptyOrders = () => {
  return (
    <div className={styles.wrapper}>
      <Htag size="xs">Вы не сделали ни одного заказа</Htag>
      <div>
        Воспользуйтесь поиском, чтобы найти всё что нужно. Либо перейдите в{" "}
        <Link to={"/categories"}>каталог</Link>.
      </div>
    </div>
  );
};
