import { MenuItem } from "./menu-item/menu-item";
import { RoutesNames } from "constants/routes-names";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as PackageIcon } from "assets/icons/package.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { useId } from "react";
import { useProductsCount } from "store/cart/features";
import { useFavoritesCount } from "store/favorites/features";
import { useActiveOrdersCount } from "store/orders/features";
import cn from "classnames";
import styles from "./menu.module.sass";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const MenuItems = [
    {
      id: useId(),
      label: "Избранное",
      renderIcon: (className: string) => <HeartIcon className={className} />,
      path: RoutesNames.Favorites,
      renderCount: useFavoritesCount,
    },
    {
      id: useId(),
      label: "Заказы",
      renderIcon: (className: string) => <PackageIcon className={className} />,
      path: RoutesNames.Orders,
      renderCount: useActiveOrdersCount,
    },
    {
      id: useId(),
      label: "Корзина",
      renderIcon: (className: string) => <CartIcon className={className} />,
      path: RoutesNames.Cart,
      renderCount: useProductsCount,
    },
  ];
  return (
    <div className={cn(styles.menu, className)}>
      {MenuItems.map((item) => (
        <MenuItem
          label={item.label}
          path={item.path}
          renderIcon={item.renderIcon}
          key={item.id}
          renderCount={item.renderCount}
        />
      ))}
    </div>
  );
};
