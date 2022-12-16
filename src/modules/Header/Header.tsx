import { Container } from "layouts";
import { Button } from "components";
import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import styles from "./Header.module.sass";

const renderLeftIcon = (className: string) => (
  <MenuIcon className={className} />
);

export const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <FullLogoImg />
        <Button
          accent="secondary"
          size="m"
          decoration="default"
          renderLeftIcon={renderLeftIcon}
        >
          Каталог
        </Button>
      </div>
    </Container>
  </header>
);
