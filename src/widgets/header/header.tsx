/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "layouts";
import { Search } from "./search/search";
import { Menu } from "./menu/menu";
import { CatalogDropdown } from "./catalog-dropdown/catalog-dropdown";
import { AuthMenu } from "./auth-menu/auth-menu";
import { Link } from "react-router-dom";
import { CatalogButton } from "./catalog-button/catalog-button";
import { MobileMenu } from "./mobile-menu/mobile-menu";
import { useWindowSize } from "hooks/useWindowSize";
import { WIDTH_BREAKPOINT_S } from "constants/css-breakpoints";
import styles from "./header.module.sass";

export const Header = () => {
  const { width } = useWindowSize();
  const isShowMobilemenu = width && width <= WIDTH_BREAKPOINT_S;

  return (
    <>
      <header id="header" className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Link to={"/"} className={styles.homeLink} />
            </div>
            <CatalogButton size="m" accent="secondary" />
            <Search className={styles.search} />
            {!isShowMobilemenu && (
              <>
                <Menu className={styles.menu} />
                <AuthMenu className={styles.authMenu} />
              </>
            )}
          </div>
        </Container>
      </header>
      <CatalogDropdown />
      {isShowMobilemenu && <MobileMenu />}
    </>
  );
};
