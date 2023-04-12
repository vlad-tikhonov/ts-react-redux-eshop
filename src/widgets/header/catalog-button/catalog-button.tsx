import { Button, ButtonProps } from "ui";
import { useModalsActions, useCatalogMenuState } from "store/modals/features";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";
import cn from "classnames";
import styles from "./catalog-button.module.sass";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);
const renderCrossIcon = (className: string) => (
  <CrossIcon className={className} />
);

interface CatalogButtonProps extends ButtonProps {}

export const CatalogButton = ({
  size,
  accent,
  className,
  ...restProps
}: CatalogButtonProps) => {
  const { toggleCatalogMenu } = useModalsActions();
  const isOpen = useCatalogMenuState();

  return (
    <Button
      accent={accent}
      size={size}
      decoration="default"
      renderLeftIcon={isOpen ? renderCrossIcon : renderMenuIcon}
      onClick={toggleCatalogMenu}
      className={cn(styles.btn, className)}
      {...restProps}
    >
      Каталог
    </Button>
  );
};
