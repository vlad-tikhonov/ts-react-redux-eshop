import styles from "./TextField.module.sass";
import cn from "classnames";
import { ElementSizes } from "types";
import { Text } from "ui";
import {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useActiveElement } from "hooks";

interface TextFieldProps {
  size: Extract<ElementSizes, "m" | "l">;
  labelText: string;
  message?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  type?: Extract<
    HTMLInputTypeAttribute,
    "text" | "password" | "email" | "number"
  >;
  className?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  renderLeftIcon?: (className: string) => JSX.Element;
  renderRightIcon?: (className: string) => JSX.Element;
}

export const TextField = ({
  onChange,
  value,
  register,
  type,
  placeholder,
  disabled = false,
  size,
  labelText,
  message,
  renderLeftIcon,
  renderRightIcon,
  className,
}: TextFieldProps) => {
  const [isActive, setIsActive] = useState(false);

  const iconsClasses = cn({
    [styles.icon]: true,
    [styles.iconM]: size === "m",
    [styles.iconL]: size === "l",
  });

  const inputClasses = cn(styles.input, {
    [styles.inputM]: size === "m",
    [styles.inputL]: size === "l",
    [styles.inputWithIconM]:
      (renderLeftIcon || renderRightIcon) && size === "m",
    [styles.inputWithIconL]:
      (renderLeftIcon || renderRightIcon) && size === "l",
    [styles.inputWithIconsM]: renderLeftIcon && renderRightIcon && size === "m",
    [styles.inputWithIconsL]: renderLeftIcon && renderRightIcon && size === "l",
  });

  const inputWrapperClasses = cn({
    [styles.inputWrapper]: true,
    [styles.inputWrapperM]: size === "m",
    [styles.inputWrapperL]: size === "l",
    [styles.inputWrapperActive]: isActive,
    [styles.inputWrapperDisabled]: disabled,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  // const activeElement = useActiveElement();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(e);
  };

  const getFormProps = () => {
    if (register) {
      return {
        ...register,
        ref: (el: HTMLInputElement) => {
          inputRef.current = el;
          register.ref(el);
        },
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          register.onChange(e);
          handleChange(e);
        },
      };
    }
    return {
      ref: (el: HTMLInputElement) => {
        inputRef.current = el;
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
      },
    };
  };

  // useEffect(() => {
  //   inputRef.current === activeElement ? setIsActive(true) : setIsActive(false);
  // }, [activeElement]);

  return (
    <div className={cn(className, styles.wrapper)}>
      <label className={styles.label}>
        {labelText && <Text size={size === "m" ? "s" : "m"}>{labelText}</Text>}
        <div className={inputWrapperClasses}>
          {renderLeftIcon && renderLeftIcon(iconsClasses)}
          <input
            disabled={disabled}
            placeholder={placeholder}
            type={type}
            spellCheck="false"
            autoComplete="off"
            className={inputClasses}
            value={value}
            {...getFormProps()}
          />
          {renderRightIcon && renderRightIcon(iconsClasses)}
        </div>
        <div className={styles.message}>
          {message && (
            <Text size="xs" className={styles.text}>
              {message}
            </Text>
          )}
        </div>
      </label>
    </div>
  );
};
