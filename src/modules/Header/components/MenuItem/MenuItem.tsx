import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./MenuItem.module.sass";

interface MenuItemProps {
  label: string;
  renderIcon: () => JSX.Element | null;
  path: string;
  count?: number;
}

export const MenuItem = ({
  label,
  renderIcon = () => null,
  path,
  count,
}: MenuItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      isActive ? cn(styles.item, styles.item_active) : styles.item
    }
  >
    {renderIcon()}
    <span className={styles.label}>{label}</span>
  </NavLink>
);
