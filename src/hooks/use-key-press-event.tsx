/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, RefObject } from "react";

interface useKeyPressEventProps {
  keyCode: string;
  cb: () => void;
}

export const useKeyPressEvent = ({
  keyCode,
  cb,
}: useKeyPressEventProps): void => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      console.log(e.target, "target");
      console.log(e.currentTarget, "current");
      if (e.code === keyCode) {
        e.stopImmediatePropagation();
        cb();
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, []);
};
