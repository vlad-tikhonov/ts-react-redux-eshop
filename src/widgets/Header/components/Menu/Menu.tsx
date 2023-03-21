import { MenuItem } from "../";
import { RoutesNames } from "constants/routes-names";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as PackageIcon } from "assets/icons/package.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import styles from "./Menu.module.sass";
import { useAppSelector } from "store/hooks";
import { selectCartLength } from "store/cart/cart-selectors";
import { selectFavoritesLength } from "store/favorites/favorites-selectors";

export const Menu = () => {
  const productCount = useAppSelector(selectCartLength);
  const favoritesCount = useAppSelector(selectFavoritesLength);

  const MenuItems = [
    {
      label: "Избранное",
      renderIcon: (className: string) => <HeartIcon className={className} />,
      path: RoutesNames.Favorites,
      count: favoritesCount,
    },
    {
      label: "Заказы",
      renderIcon: (className: string) => <PackageIcon className={className} />,
      path: RoutesNames.Orders,
      count: 0,
    },
    {
      label: "Корзина",
      renderIcon: (className: string) => <CartIcon className={className} />,
      path: RoutesNames.Cart,
      count: productCount,
    },
  ];

  return (
    <div className={styles.menu}>
      {MenuItems.map((item) => (
        <MenuItem
          label={item.label}
          path={item.path}
          renderIcon={item.renderIcon}
          key={item.label}
          count={item.count}
        />
      ))}
    </div>
  );
};
