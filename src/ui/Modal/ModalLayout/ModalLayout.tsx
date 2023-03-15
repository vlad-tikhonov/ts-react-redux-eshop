import { ModalProps } from "../Modal";
import { Button } from "ui";
import styles from "./ModalLayout.module.sass";
import animationStyles from "./Animation.module.sass";
import { ReactComponent as CrossIcon } from "assets/icons/x.svg";
import { CSSTransition } from "react-transition-group";
import { useRef, useState, useEffect } from "react";

interface ModalLayoutProps extends ModalProps {}

const renderEyeIcon = (className: string) => (
  <CrossIcon className={className} />
);

const ANIMATION_TIME = 300;

const wrapperAnimation = {
  enter: animationStyles["wrapper-enter"],
  enterActive: animationStyles["wrapper-enter-active"],
  exit: animationStyles["wrapper-exit"],
  exitActive: animationStyles["wrapper-exit-active"],
};

const modalAnimation = {
  enter: animationStyles["modal-enter"],
  enterActive: animationStyles["modal-enter-active"],
  exit: animationStyles["modal-exit"],
  exitActive: animationStyles["modal-exit-active"],
};

export const ModalLayout = ({
  children,
  onClose,
  opened,
}: ModalLayoutProps) => {
  const [animationIn, setAnimationIn] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
  };

  const modalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.test}>
      <CSSTransition
        in={animationIn}
        nodeRef={wrapperRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={wrapperAnimation}
      >
        <div
          className={styles.wrapper}
          onClick={handleClose}
          ref={wrapperRef}
        ></div>
      </CSSTransition>
      <CSSTransition
        nodeRef={modalRef}
        timeout={ANIMATION_TIME}
        in={animationIn}
        mountOnEnter
        unmountOnExit
        classNames={modalAnimation}
      >
        <div className={styles.modal} onClick={modalClick} ref={modalRef}>
          <Button
            size="m"
            accent="grayscale"
            decoration="default"
            className={styles.btn}
            onClick={handleClose}
            renderRightIcon={renderEyeIcon}
          />
          <div className={styles.content}>{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};
