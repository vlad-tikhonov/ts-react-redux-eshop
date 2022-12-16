import { MenuItem } from "../";
import { RoutesNames } from "constants/routes-names";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as PackageIcon } from "assets/icons/package.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import styles from "./Menu.module.sass";

const MenuItems = [
  {
    label: "Избранное",
    renderIcon: () => <HeartIcon />,
    path: RoutesNames.Favorites,
  },
  {
    label: "Заказы",
    renderIcon: () => <PackageIcon />,
    path: RoutesNames.Orders,
  },
  {
    label: "Корзина",
    renderIcon: () => <CartIcon />,
    path: RoutesNames.Cart,
  },
];

export const Menu = () => {
  return (
    <div className={styles.menu}>
      {MenuItems.map((item) => (
        <MenuItem
          label={item.label}
          path={item.path}
          renderIcon={item.renderIcon}
          key={item.label}
        />
      ))}
    </div>
  );
};
