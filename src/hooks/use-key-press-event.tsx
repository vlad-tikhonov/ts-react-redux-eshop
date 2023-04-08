/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useKeyPressEvent = (keyCode: string, cb: () => void): void => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        e.stopImmediatePropagation();
        cb();
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, []);
};
