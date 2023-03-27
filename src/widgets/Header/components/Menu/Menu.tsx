import { MenuItem } from "./MenuItem/MenuItem";
import { RoutesNames } from "constants/routes-names";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as PackageIcon } from "assets/icons/package.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import styles from "./Menu.module.sass";
import { useAppSelector } from "store/hooks";
import { selectCartProductsCount } from "store/cart/cart-selectors";
import { selectFavoritesLength } from "store/favorites/favorites-selectors";
import { useId } from "react";
import { selectActiveOrdersCount } from "store/orders/orders-selectors";

export const Menu = () => {
  const productCount = useAppSelector(selectCartProductsCount);
  const favoritesCount = useAppSelector(selectFavoritesLength);
  const activeOrdersCount = useAppSelector(selectActiveOrdersCount);

  const MenuItems = [
    {
      id: useId(),
      label: "Избранное",
      renderIcon: (className: string) => <HeartIcon className={className} />,
      path: RoutesNames.Favorites,
      count: favoritesCount,
    },
    {
      id: useId(),
      label: "Заказы",
      renderIcon: (className: string) => <PackageIcon className={className} />,
      path: RoutesNames.Orders,
      count: activeOrdersCount,
    },
    {
      id: useId(),
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
          key={item.id}
          count={item.count}
        />
      ))}
    </div>
  );
};
