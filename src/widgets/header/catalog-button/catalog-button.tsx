import { useModalsActions, useCatalogMenuState } from "store/modals/features";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";
import { Button } from "ui";
import styles from "./catalog-button.module.sass";

const renderMenuIcon = (className: string) => (
  <MenuIcon className={className} />
);
const renderCrossIcon = (className: string) => (
  <CrossIcon className={className} />
);

export const CatalogButton = () => {
  const { toggleCatalogMenu } = useModalsActions();
  const isOpen = useCatalogMenuState();

  return (
    <Button
      decoration="default"
      renderLeftIcon={isOpen ? renderCrossIcon : renderMenuIcon}
      onClick={toggleCatalogMenu}
      className={styles.btn}
      aria-label="Открыть меню каталога"
      size="m"
      accent="secondary"
    >
      Каталог
    </Button>
  );
};
