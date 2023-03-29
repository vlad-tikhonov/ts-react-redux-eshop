import { useClickOutside } from "hooks";
import { useRef, useState } from "react";
import { useAuthActions } from "store/auth/features";
import { Text } from "ui";
import styles from "./user-menu.module.sass";
import { ReactComponent as ChevronDown } from "assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "assets/icons/chevron-up.svg";
import { User } from "types";
import cn from "classnames";

interface UserMenuProps {
  userName: User["name"];
  className?: string;
}

export const UserMenu = ({ userName, className }: UserMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { signOut } = useAuthActions();

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen((b) => !b);
  };

  const handleLogout = () => {
    signOut();
  };

  useClickOutside([menuRef], closeMenu);

  return (
    <div ref={menuRef} className={cn(styles.wrapper, className)}>
      <div className={styles.menu} onClick={toggleMenu}>
        <div className={styles.photo}></div>
        <div className={styles.name}>
          <Text size="s" className={styles.name_text}>
            {userName}
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
