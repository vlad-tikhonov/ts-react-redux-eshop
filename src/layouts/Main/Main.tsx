import styles from "./Main.module.sass";
import { Container } from "layouts";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className={styles.main}>
    <Container>{children}</Container>
  </main>
);
