import { useState, useEffect } from "react";
import { Button, Text } from "ui";
import { Option } from "types";
import styles from "./ButtonsGroup.module.sass";
import {
  FieldValues,
  Path,
  UseFormSetValue,
  PathValue,
  FieldPath,
} from "react-hook-form";

interface RadioProps<T extends FieldValues> {
  options: [Option, Option];
  label: string;
  setFormValue?: UseFormSetValue<T>;
  name?: FieldPath<T>;
}

export const ButtonsGroup = <T extends FieldValues>({
  options,
  label,
  setFormValue,
  name,
}: RadioProps<T>) => {
  const [firstOption, secondOption] = options;
  const [state, setState] = useState<Option["value"]>(firstOption.value);

  const updateFormValue = (value: Option["value"]) => {
    if (name && setFormValue) {
      setFormValue(name, value as PathValue<T, Path<T>>);
    }
  };

  const handleSetState = (first: boolean) => {
    if (first) {
      setState(firstOption.value);
      updateFormValue(firstOption.value);
    } else {
      setState(secondOption.value);
      updateFormValue(secondOption.value);
    }
  };

  useEffect(() => {
    updateFormValue(firstOption.value);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Text size="s" className={styles.label}>
        {label}
      </Text>
      <div className={styles.buttons}>
        <Button
          size="s"
          accent={state === firstOption.value ? "secondary" : "grayscale"}
          decoration={state === firstOption.value ? "default" : "no"}
          className={styles.btn}
          onClick={() => handleSetState(true)}
        >
          {firstOption.label}
        </Button>
        <Button
          size="s"
          accent={state === secondOption.value ? "secondary" : "grayscale"}
          decoration={state === secondOption.value ? "default" : "no"}
          className={styles.btn}
          onClick={() => handleSetState(false)}
        >
          {secondOption.label}
        </Button>
      </div>
    </div>
  );
};
