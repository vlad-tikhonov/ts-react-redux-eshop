/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./mobile-menu.module.sass";
import { MenuItem } from "widgets/header/menu/menu-item/menu-item";
import { Menu } from "widgets/header/menu/menu";
import { AuthMenu } from "widgets/header/auth-menu/auth-menu";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { Portal } from "components";
import { useEffect, useMemo } from "react";
import cn from "classnames";

interface MobileMenuProps {
  className?: string;
}

const body = document.body;

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const mobileMenu = useMemo(() => {
    const el = document.createElement("div");
    el.classList.add("mobile-menu");
    return el;
  }, []);

  useEffect(() => {
    body?.appendChild(mobileMenu);

    return () => {
      body?.removeChild(mobileMenu);
    };
  }, []);

  return (
    <Portal to={mobileMenu}>
      <div className={cn(styles.wrapper, className)}>
        <MenuItem
          label="Каталог"
          path="/categories"
          renderCount={() => 0}
          renderIcon={(className: string) => <MenuIcon className={className} />}
        />
        <Menu />
        <AuthMenu />
      </div>
    </Portal>
  );
};
