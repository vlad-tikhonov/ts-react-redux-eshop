import styles from "./Container.module.sass";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
