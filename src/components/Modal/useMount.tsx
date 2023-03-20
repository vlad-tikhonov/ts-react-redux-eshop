import { useState, useEffect } from "react";

export const useMount = (opened: boolean, time: number) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, time);
    }
  }, [opened]);

  return { mounted };
};
