/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "layouts";
import { Search } from "./search/search";
import { Menu } from "./menu/menu";
import { CatalogDropdown } from "./catalog-dropdown/catalog-dropdown";
import { AuthMenu } from "./auth-menu/auth-menu";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.sass";
import { CatalogButton } from "./catalog-button/catalog-button";
import { MobileMenu } from "./mobile-menu/mobile-menu";

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <header id="header" className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Link to={"/"} className={styles.homeLink} />
            </div>
            <CatalogButton ref={buttonRef} />
            <Search className={styles.search} />
            <Menu className={styles.menu} />
            <AuthMenu className={styles.authMenu} />
          </div>
        </Container>
      </header>
      <CatalogDropdown buttonRef={buttonRef} />
      <MobileMenu />
    </>
  );
};
