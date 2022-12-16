import { Container } from "layouts";
import { Button } from "components";
import { Search } from "./components";
import styles from "./Header.module.sass";

import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

const renderMenuIcon = (className: string) => (
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
          renderLeftIcon={renderMenuIcon}
        >
          Каталог
        </Button>
        <Search className={styles.search} />
      </div>
    </Container>
  </header>
);
