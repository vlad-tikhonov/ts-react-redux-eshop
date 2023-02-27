import { Container } from "layouts";
import { Button, Modal } from "components";
import { Search, Menu } from "./components";
import styles from "./Header.module.sass";

import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { useState } from "react";
import { AuthForm } from "modules/Auth/components";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);

export const Header = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
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
          <Menu />
          <Button
            accent="primary"
            decoration="default"
            size="m"
            onClick={openModal}
          >
            Войти
          </Button>
          <Modal isActive={modalState} closeModal={closeModal}>
            <AuthForm />
          </Modal>
        </div>
      </Container>
    </header>
  );
};
