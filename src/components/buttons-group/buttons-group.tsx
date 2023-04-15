/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Button } from "ui";
import { Option } from "types";
import styles from "./buttons-group.module.sass";

interface ButtonsGroupProps {
  options: [Option, Option];
  label: string;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const ButtonsGroup = ({
  options,
  label,
  onChange,
  disabled,
}: ButtonsGroupProps) => {
  const [firstOption, secondOption] = options;
  const [value, setValue] = useState<Option["value"]>();

  const updateFormValue = (value: Option["value"]) => {
    if (!onChange) return;
    onChange(value);
  };

  const handleSetState = (first: boolean) => {
    if (first) {
      setValue(firstOption.value);
      updateFormValue(firstOption.value);
    } else {
      setValue(secondOption.value);
      updateFormValue(secondOption.value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.buttons}>
        <Button
          size="s"
          accent={value === firstOption.value ? "secondary" : "grayscale"}
          decoration={value === firstOption.value ? "default" : "no"}
          className={styles.btn}
          onClick={() => handleSetState(true)}
          disabled={disabled}
          type="button"
        >
          {firstOption.label}
        </Button>
        <Button
          size="s"
          accent={value === secondOption.value ? "secondary" : "grayscale"}
          decoration={value === secondOption.value ? "default" : "no"}
          className={styles.btn}
          onClick={() => handleSetState(false)}
          disabled={disabled}
          type="button"
        >
          {secondOption.label}
        </Button>
      </div>
    </div>
  );
};
