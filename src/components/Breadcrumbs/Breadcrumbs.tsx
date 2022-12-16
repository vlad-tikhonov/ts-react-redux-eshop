import cn from "classnames";
import { Text } from "components";
import { BreadcrumbItem } from "types/componets-types";
import { RoutesNames } from "constants/routes-names";
import { NavLink } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const defaultItems: BreadcrumbItem[] = [
  {
    to: RoutesNames.Home,
    label: "Главная",
  },
];

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbItems = [...defaultItems, ...items];
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbItems.map((item) => (
        <span key={item.label} className={styles.item}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive ? cn(styles.link, styles.link_active) : styles.link
            }
          >
            {item.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};
