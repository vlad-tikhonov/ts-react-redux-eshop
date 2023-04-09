/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

interface useKeyPressEventProps {
  condition?: boolean;
  keyCode: string;
  cb: () => void;
}

export const useKeyPressEvent = ({
  keyCode,
  cb,
  condition,
}: useKeyPressEventProps): void => {
  useEffect(() => {
    if (!condition) {
      return;
    }

    const listener = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        e.preventDefault();
        e.stopImmediatePropagation();
        cb();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [condition, cb]);
};
