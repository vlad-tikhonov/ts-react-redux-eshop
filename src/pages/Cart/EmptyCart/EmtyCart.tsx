import { Htag } from "ui";
import { Link } from "react-router-dom";

import styles from "./EmtyCart.module.sass";

export const EmtyCart = () => {
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
