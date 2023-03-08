import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Button } from "ui";
import styles from "./Modal.module.sass";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";

interface ModalProps {
  children: ReactNode;
  isActive: boolean;
  closeModal: () => void;
}

const portal = document.getElementById("portal") as HTMLElement;

const EyeRenderIcon = (className: string) => (
  <CrossIcon className={className} />
);

export const Modal = ({ isActive, closeModal, children }: ModalProps) => {
  const handleClose = () => {
    closeModal();
  };

  const modalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  if (isActive) {
    return ReactDOM.createPortal(
      <div className={styles.wrapper} onClick={handleClose}>
        <div className={styles.modal} onClick={modalClick}>
          <Button
            size="m"
            accent="grayscale"
            decoration="default"
            className={styles.btn}
            onClick={handleClose}
            renderRightIcon={EyeRenderIcon}
          ></Button>
          <div className={styles.content}>{children}</div>
        </div>
      </div>,
      portal
    );
  }

  return <></>;
};
