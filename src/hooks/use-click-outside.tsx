import { RefObject, useEffect } from "react";
import { useLatest } from "hooks";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void,
  attached: boolean
) => {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const listener = (e: Event) => {
      e.stopPropagation();
      const el = ref.current;
      if (!el || el.contains(e.target as Node)) {
        return;
      }
      latestHandler.current(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, latestHandler, attached]);
};
