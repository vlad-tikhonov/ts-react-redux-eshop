import { BreadcrumbItem } from "types/componets-types";
import { RoutesNames } from "constants/routes-names";
import { NavLink } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";
import { setActiveClass } from "helpers/utils";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const defaultItems: BreadcrumbItem[] = [
  {
    to: RoutesNames.Home,
    label: "Главная",
  },
];

const setIsActive = setActiveClass(styles.link_active, styles.link);

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbItems = [...defaultItems, ...items];
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbItems.map((item, i) => (
        <span key={i} className={styles.item}>
          <NavLink to={item.to} className={setIsActive}>
            {item.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};
