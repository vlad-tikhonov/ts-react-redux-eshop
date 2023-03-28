import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.sass";
import { setActiveClass } from "helpers/utils";
interface MenuItemProps {
  label: string;
  path: string;
  renderIcon: (className: string) => JSX.Element;
  renderCount: () => number;
}

const setIsActive = setActiveClass(styles.item_active, styles.item);

export const MenuItem = ({
  label,
  renderIcon,
  path,
  renderCount,
}: MenuItemProps) => {
  const count = renderCount();
  return (
    <NavLink to={path} className={setIsActive}>
      {renderIcon(styles.icon)}
      <span className={styles.label}>{label}</span>
      {!!count && <span className={styles.tag}>{count}</span>}
    </NavLink>
  );
};
