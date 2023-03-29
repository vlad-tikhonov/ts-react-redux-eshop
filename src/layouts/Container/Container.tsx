import { ReactNode } from "react";
import styles from "./container.module.sass";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
