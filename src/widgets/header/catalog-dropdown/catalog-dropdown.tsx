/* eslint-disable react-hooks/exhaustive-deps */
import cn from "classnames";
import styles from "./catalog-dropdown.module.sass";
import { Link, useLocation } from "react-router-dom";
import { Text } from "ui";
import { useCategories } from "store/categories/features/use-categories";
import { useCatalogMenuState, useModalsActions } from "store/modals/features";
import { useRef, useEffect, RefObject } from "react";
import { useClickOutside } from "hooks";

interface CatalogDropdownProps {
  className?: string;
  buttonRef: RefObject<HTMLButtonElement>;
}

export const CatalogDropdown = ({
  buttonRef,
  className,
}: CatalogDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const [categories] = useCategories();

  const { closeCatalogMenu } = useModalsActions();
  const isOpen = useCatalogMenuState();

  useClickOutside([dropdownRef, buttonRef], () => {
    if (!isOpen) {
      return;
    }

    closeCatalogMenu();
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeCatalogMenu();
  }, [pathname]);

  if (!categories.length) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className={cn(
        {
          [styles.dropdown]: true,
          [styles.dropdown_isOpen]: isOpen,
        },
        className
      )}
    >
      <ul className={styles.items}>
        {categories.map((c) => (
          <li key={c._id} className={styles.item}>
            <Text size="s" bold className={styles.text}>
              {c.title}
            </Text>
            <Link to={`/categories/${c.slug}`} className={styles.link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
