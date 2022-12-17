import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./MenuItem.module.sass";
import { setActiveClass } from "helpers/utils";
interface MenuItemProps {
  label: string;
  renderIcon: () => JSX.Element | null;
  path: string;
  count?: number;
}

const setIsActive = setActiveClass(styles.item_active, styles.item);

export const MenuItem = ({
  label,
  renderIcon = () => null,
  path,
  count,
}: MenuItemProps) => (
  <NavLink to={path} className={setIsActive}>
    {renderIcon()}
    <span className={styles.label}>{label}</span>
  </NavLink>
);
