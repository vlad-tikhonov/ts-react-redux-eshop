import { useState, useEffect } from "react";

interface useTimeoutProps {
  condition: boolean;
  delay: number;
}

export const useBoolTimeout = ({ condition, delay }: useTimeoutProps) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (!condition) return;

    setTimeout(() => {
      setValue(true);
    }, delay);
  }, [condition, delay]);

  return value;
};
