import { useClickOutside } from "hooks";
import { useRef, useState } from "react";
import { User } from "types";
import { Text } from "components";
import cn from "classnames";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "assets/icons/chevron-up.svg";
import styles from "./UserMenu.module.sass";
import { useAppDispatch } from "app/hooks";
import { logout } from "features/auth/auth-slice";

interface UserMenuProps {
  name: User["name"];
  surname: User["surname"];
  className?: string;
}

export const UserMenu = ({ name, surname, className }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

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

  return (
    <div ref={menuRef} className={cn(className, styles.wrapper)}>
      <div className={styles.menu} onClick={toggleMenu}>
        <div className={styles.photo}></div>
        <div className={styles.name}>
          <Text size="s" className={styles.name_text}>
            {name + " " + surname}
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
