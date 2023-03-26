import styles from "./UnauthOrders.module.sass";
import { Htag } from "ui";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";

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
