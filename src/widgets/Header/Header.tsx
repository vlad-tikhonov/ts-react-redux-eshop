/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "layouts";
import { Search } from "./search/search";
import { Menu } from "./menu/menu";
import { CatalogDropdown } from "./catalog-dropdown/catalog-dropdown";
import { AuthMenu } from "./auth-menu/auth-menu";
import { useRef } from "react";
// import { ReactComponent as FullLogoImg } from "assets/images/logo-full.svg";
import { Link } from "react-router-dom";
import styles from "./header.module.sass";
import { CatalogButton } from "./catalog-button/catalog-button";

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              {/* <FullLogoImg /> */}
              <Link to={"/"} className={styles.homeLink} />
            </div>
            <CatalogButton ref={buttonRef} />
            <Search className={styles.search} />
            <Menu />
            <AuthMenu />
          </div>
        </Container>
      </header>
      <CatalogDropdown buttonRef={buttonRef} />
    </>
  );
};
