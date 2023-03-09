import { Container } from "layouts";
import { Button, Modal } from "ui";
import { Search, Menu, CatalogDropdown } from "./components";
import { useEffect, useRef, useState } from "react";
import { AuthForm } from "modules/Auth";
import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";
import { useAuth } from "features/auth/use-auth";
import { UserMenu } from "./components";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.sass";
import { useClickOutside } from "hooks";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);
const renderCrossIcon = (className: string) => (
  <CrossIcon className={className} />
);

const renderLoginIcon = (className: string) => (
  <LoginIcon className={className} />
);

export const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const { user } = useAuth();

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const openDropdown = () => {
    if (!dropdownState) {
      setDropdownState(true);
    }
  };

  const closeDropdown = () => {
    if (dropdownState) {
      setDropdownState(false);
    }
  };

  useClickOutside(headerRef, closeDropdown);

  useEffect(() => {
    closeDropdown();
  }, [pathname]);

  return (
    <header ref={headerRef}>
      <div className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <FullLogoImg />
              <Link to={"/"} className={styles.homeLink} />
            </div>
            <Button
              accent="secondary"
              size="m"
              decoration="default"
              renderLeftIcon={dropdownState ? renderCrossIcon : renderMenuIcon}
              onClick={dropdownState ? closeDropdown : openDropdown}
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
              <AuthForm onLogin={closeModal} />
            </Modal>
          </div>
        </Container>
      </div>
      <CatalogDropdown isOpen={dropdownState} />
    </header>
  );
};
