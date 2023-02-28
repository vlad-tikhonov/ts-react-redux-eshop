import { Container } from "layouts";
import { Button, Modal } from "components";
import { Search, Menu } from "./components";
import { useState } from "react";
import { AuthForm } from "modules/Auth/components";
import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";
import { useAuth } from "features/auth/useAuth";
import { UserMenu } from "./components";
import styles from "./Header.module.sass";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);

const renderLoginIcon = (className: string) => (
  <LoginIcon className={className} />
);

export const Header = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const { user } = useAuth();

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
          {user ? (
            <UserMenu name={user.name} surname={user.surname} />
          ) : (
            <Button
              accent="primary"
              decoration="default"
              size="m"
              renderRightIcon={renderLoginIcon}
              onClick={openModal}
            >
              Войти
            </Button>
          )}
          <Modal isActive={modalState} closeModal={closeModal}>
            <AuthForm />
          </Modal>
        </div>
      </Container>
    </header>
  );
};
