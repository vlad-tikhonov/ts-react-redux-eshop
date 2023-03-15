import { ReactNode } from "react";
import { Portal } from "components";
import { ModalLayout } from "./ModalLayout/ModalLayout";
import { useMount } from "./useMount";
export interface ModalProps {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
}

const ANIMATION_TIME = 500;

export const Modal = (props: ModalProps) => {
  const { mounted } = useMount(props.opened, ANIMATION_TIME);

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <ModalLayout {...props} />
    </Portal>
  );
};
