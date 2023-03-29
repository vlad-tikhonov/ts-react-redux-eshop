import { Container } from "layouts";
import styles from "./main.module.sass";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className={styles.main}>
    <Container>{children}</Container>
  </main>
);
