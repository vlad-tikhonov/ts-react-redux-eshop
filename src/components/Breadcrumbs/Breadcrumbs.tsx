import { Text } from "components";
import { BreadcrumbItem } from "types/componets-types";
import { RoutesNames } from "constants/routes-names";
import { Link } from "react-router-dom";
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
        <span key={item.label} className={styles.breadcrumbItem}>
          <Link to={item.to} className={styles.link}>
            <Text size="xs">{item.label}</Text>
          </Link>
        </span>
      ))}
    </div>
  );
};
