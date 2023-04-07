import styles from "./select.module.sass";
import { useState } from "react";
import { ReactComponent as ChevronUpIcon } from "assets/icons/chevron-up.svg";
import { ReactComponent as ChevronDownIcon } from "assets/icons/chevron-down.svg";
import cn from "classnames";

interface InputSelectProps {
  label?: string;
  options: string[];
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  options,
  label,
  onChange,
  className,
}: InputSelectProps) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState<string>("");

  const handleSelect = (option: string) => {
    setValue(option);

    if (onChange) {
      onChange(option);
    }
  };

  const selectClasses = cn({
    [styles.select]: true,
    [styles.select_active]: isActive,
  });

  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <div
        className={cn(selectClasses, className)}
        onClick={() => {
          setIsActive((b) => !b);
        }}
      >
        <div className={styles.header}>
          <span>{value} </span>
          {isActive ? (
            <ChevronUpIcon className={styles.icon} />
          ) : (
            <ChevronDownIcon className={styles.icon} />
          )}
        </div>
        {isActive && (
          <ul className={styles.list}>
            {options.map((o, i) => (
              <li
                className={styles.item}
                key={i}
                onClick={() => {
                  handleSelect(o);
                }}
              >
                {o}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
