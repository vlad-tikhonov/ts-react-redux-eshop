import styles from "./Main.module.sass";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className={styles.main}>{children}</main>
);
