import { Button } from "ui";
import { useModalsActions, useCatalogMenuState } from "store/modals/features";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";
import { forwardRef } from "react";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);
const renderCrossIcon = (className: string) => (
  <CrossIcon className={className} />
);

interface CatalogButtonProps {
  className?: string;
}

export const CatalogButton = forwardRef<HTMLButtonElement, CatalogButtonProps>(
  (props, ref) => {
    const { toggleCatalogMenu } = useModalsActions();
    const isOpen = useCatalogMenuState();

    return (
      <Button
        accent="secondary"
        size="m"
        decoration="default"
        renderLeftIcon={isOpen ? renderCrossIcon : renderMenuIcon}
        onClick={toggleCatalogMenu}
        ref={ref}
        className={props.className}
      >
        Каталог
      </Button>
    );
  }
);
