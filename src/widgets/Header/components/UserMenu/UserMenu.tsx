import { useClickOutside } from "hooks";
import { useRef, useState } from "react";
import { Text, Button } from "ui";
import cn from "classnames";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "assets/icons/chevron-up.svg";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";

import styles from "./UserMenu.module.sass";
import { useAppDispatch } from "app/hooks";
import { logout } from "features/auth/auth-slice";
import { useAuth } from "features/auth/use-auth";

interface UserMenuProps {
  openModal: () => void;
  className?: string;
}

const renderLoginIcon = (className: string) => (
  <LoginIcon className={className} />
);

export const UserMenu = ({ openModal, className }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const [user] = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen((b) => !b);
  };

  useClickOutside(menuRef, closeMenu);

  if (!user) {
    return (
      <Button
        accent="primary"
        decoration="default"
        size="m"
        renderRightIcon={renderLoginIcon}
        onClick={openModal}
      >
        Войти
      </Button>
    );
  }

  return (
    <div ref={menuRef} className={cn(className, styles.wrapper)}>
      <div className={styles.menu} onClick={toggleMenu}>
        <div className={styles.photo}></div>
        <div className={styles.name}>
          <Text size="s" className={styles.name_text}>
            {user.name + " " + user.surname}
          </Text>
        </div>
        <div className={styles.btn}>
          {isOpen ? (
            <ChevronUp className={styles.chevron} />
          ) : (
            <ChevronDown className={styles.chevron} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdown_wrapper}>
          <ul className={styles.dropdown}>
            <li className={styles.item}>
              <span className={styles.text}>Профиль</span>
            </li>
            <li className={styles.item} onClick={handleLogout}>
              <span className={styles.text}>Выйти</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
