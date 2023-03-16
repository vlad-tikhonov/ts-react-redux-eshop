import { TextField, TextFieldProps } from "ui";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import styles from "./SelectField.module.sass";
import { ReactComponent as ChevronDownIcon } from "assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUpIcon } from "assets/icons/chevron-up.svg";
import { useClickOutside } from "hooks";
import cn from "classnames";
import { FieldValues, UseFormSetFocus, Path } from "react-hook-form";

type SelectFieldProps<T extends FieldValues> = Pick<
  TextFieldProps,
  "labelText" | "size" | "message" | "placeholder" | "disabled" | "register"
> & {
  list: string[];
  setFocus?: UseFormSetFocus<T>;
};

export const SelectField = <T extends FieldValues>(
  props: SelectFieldProps<T>
) => {
  const { size, register, list, setFocus } = props;

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

  const handleClick = async (
    e: React.MouseEvent<HTMLUListElement, globalThis.MouseEvent>
  ) => {
    if (
      e.target instanceof HTMLElement &&
      typeof e.target.dataset.value === "string"
    ) {
      setValue(e.target.dataset.value);
      setIsShowList(false);
      if (register && setFocus) {
        const fieldName = register.name as Path<T>;
        setFocus(fieldName);
      }
    }
  };

  useClickOutside(wrapperRef, () => {
    setIsShowList(false);
  });

  useEffect(() => {}, [value]);

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
