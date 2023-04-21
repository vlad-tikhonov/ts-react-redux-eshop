import { useLocation, Navigate } from "react-router-dom";
import { Htag, Text } from "ui";
import styles from "./error.module.sass";

interface LocationState {
  errors: string[];
  pathname: string;
}

const Error = () => {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to="/404" replace />;
  }

  const { errors, pathname } = location.state as LocationState;

  return (
    <div className={styles.wrapper}>
      <Htag size="m" className={styles.title_m}>
        Ошибка сервера
      </Htag>
      <Htag size="s" className={styles.title_s}>
        Невозможно загрузить {pathname}
      </Htag>
      <Htag size="xs" className={styles.title_xs}>
        Возможные причины:
      </Htag>
      <ul className={styles.list}>
        {errors.map((e, i) => (
          <li key={i}>
            <Text size="s">{e}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Error;
