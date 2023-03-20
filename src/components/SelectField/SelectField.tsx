import { TextField, TextFieldProps } from "ui";
import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import styles from "./SelectField.module.sass";
import { ReactComponent as ChevronDownIcon } from "assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "assets/icons/chevron-up.svg";
import { useClickOutside } from "hooks";
import cn from "classnames";
import {
  FieldValues,
  Path,
  UseFormSetValue,
  PathValue,
  FieldPath,
} from "react-hook-form";

type SelectFieldProps<T extends FieldValues> = Pick<
  TextFieldProps,
  "labelText" | "size" | "message" | "placeholder" | "disabled" | "register"
> & {
  list: string[];
  setFormValue?: UseFormSetValue<T>;
  name?: FieldPath<T>;
};

export const SelectField = <T extends FieldValues>(
  props: SelectFieldProps<T>
) => {
  const { size, list, setFormValue, name } = props;

  const [isShowList, setIsShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");

  const toggleShowList = () => {
    setIsShowList((b) => !b);
  };

  const renderDownIcon = (className: string) => (
    <ChevronDownIcon className={className} onClick={toggleShowList} />
  );

  const renderUpIcon = (className: string) => (
    <ChevronUpIcon className={className} onClick={toggleShowList} />
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return;
  };

  const handleClick = (
    e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>
  ) => {
    if (
      e.target instanceof HTMLElement &&
      typeof e.target.dataset.value === "string"
    ) {
      const newValue = e.target.dataset.value;
      setValue(newValue);
      setIsShowList(false);
      if (name && setFormValue) {
        setFormValue(name, newValue as PathValue<T, Path<T>>, {
          shouldValidate: true,
        });
      }
    }
  };

  useClickOutside(wrapperRef, () => {
    setIsShowList(false);
  });

  return (
    <div
      ref={wrapperRef}
      className={cn({
        [styles.wrapper]: true,
        [styles.wrapper_m]: size === "m",
        [styles.wrapper_l]: size === "l",
      })}
    >
      <TextField
        {...props}
        value={value}
        onChange={handleChange}
        renderRightIcon={isShowList ? renderUpIcon : renderDownIcon}
        writeble
        disabled
      />
      {isShowList && (
        <ul className={styles.list} onClick={handleClick}>
          {list.map((el, i) => (
            <li className={styles.item} data-value={el} key={i}>
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
