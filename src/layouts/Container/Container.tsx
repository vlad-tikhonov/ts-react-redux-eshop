import styles from "./Container.module.sass";

interface ContainerProps {
  children: JSX.Element;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
