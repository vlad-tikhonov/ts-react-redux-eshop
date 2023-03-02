import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.sass";
import { setActiveClass } from "helpers/utils";
interface MenuItemProps {
  label: string;
  renderIcon: (className: string) => JSX.Element;
  path: string;
  count: number;
}

const setIsActive = setActiveClass(styles.item_active, styles.item);

export const MenuItem = ({ label, renderIcon, path, count }: MenuItemProps) => (
  <NavLink to={path} className={setIsActive}>
    {renderIcon(styles.icon)}
    <span className={styles.label}>{label}</span>
    {count > 0 && <span className={styles.tag}>{count}</span>}
  </NavLink>
);
