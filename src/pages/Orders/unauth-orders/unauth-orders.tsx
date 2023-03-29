import { Htag } from "ui";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";
import styles from "./unauth-orders.module.sass";

export const UnauthOrders = () => {
  return (
    <div className={styles.wrapper}>
      <Htag size="xs" className={styles.title}>
        Чтобы просматривать заказы, выполните вход
      </Htag>
      <LoginIcon className={styles.icon} />
    </div>
  );
};

export default UnauthOrders;
