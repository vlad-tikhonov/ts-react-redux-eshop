import { Htag } from "ui";
import { Link } from "react-router-dom";
import styles from "./emty-cart.module.sass";

export const EmptyCart = () => {
  return (
    <div className={styles.cart}>
      <Htag size="xs">Корзина пуста</Htag>
      <div>
        Воспользуйтесь поиском, чтобы найти всё что нужно. Либо перейдите в{" "}
        <Link to={"/categories"}>каталог</Link>.
      </div>
    </div>
  );
};
