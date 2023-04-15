/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

interface useKeyPressEventProps {
  keyCode: string;
  cb: () => void;
  condition?: boolean;
  preventDefault?: boolean;
}

export const useKeyPressEvent = ({
  keyCode,
  cb,
  condition,
  preventDefault,
}: useKeyPressEventProps): void => {
  useEffect(() => {
    if (typeof condition !== "undefined" && !condition) {
      return;
    }

    const listener = (e: KeyboardEvent) => {
      if (e.code !== keyCode) {
        return;
      }

      if (preventDefault) {
        e.preventDefault();
      }

      e.stopImmediatePropagation();
      cb();
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [condition, cb]);
};
