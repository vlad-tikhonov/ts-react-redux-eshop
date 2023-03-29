/* eslint-disable react-hooks/exhaustive-deps */
import cn from "classnames";
import { ElementSizes } from "types";
import { useState, useRef, useEffect } from "react";
import styles from "./checkbox.module.sass";

interface CheckboxProps {
  size: Exclude<ElementSizes, "xs">;
  checked: boolean | null;
  onChange: (b: boolean) => void;
  className?: string;
}

export const Checkbox = ({
  size,
  checked,
  onChange,
  className,
}: CheckboxProps) => {
  const [checkboxState, setCheckboxState] = useState<boolean | null>(checked);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    switch (checkboxState) {
      case true:
        setCheckboxState(false);
        onChange(false);
        break;
      case false:
        setCheckboxState(true);
        onChange(true);
        break;
      default: // null
        setCheckboxState(true);
        onChange(true);
        break;
    }
  };

  useEffect(() => {
    const updateInput = () => {
      if (!inputRef.current) {
        return;
      }

      switch (checkboxState) {
        case true:
          inputRef.current.checked = checkboxState;
          break;
        case false:
          inputRef.current.checked = checkboxState;
          break;
        case null:
          inputRef.current.indeterminate = false;
          break;
        default:
          return;
      }
    };

    updateInput();
    setCheckboxState(checked);
  }, [checked]);

  return (
    <label className={cn(styles.label, className)}>
      <input
        ref={inputRef}
        type="checkbox"
        onClick={handleClick}
        className={cn({
          [styles.input]: true,
          [styles.inputTrue]: checkboxState === true,
          [styles.inputFalse]: checkboxState === false,
          [styles.inputNull]: checkboxState === null,
        })}
      />
      <span
        className={cn({
          [styles.customInput]: true,
          [styles.s]: size === "s",
          [styles.m]: size === "m",
          [styles.l]: size === "l",
          [styles.xl]: size === "xl",
        })}
      ></span>
    </label>
  );
};
