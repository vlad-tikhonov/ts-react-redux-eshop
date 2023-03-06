import styles from "./Wrapper.module.sass";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);
