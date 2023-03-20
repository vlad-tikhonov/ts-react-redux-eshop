import styles from "./TextField.module.sass";
import cn from "classnames";
import { ElementSizes } from "types";
import { Text } from "ui";
import { HTMLInputTypeAttribute, useRef, useState, ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface TextFieldProps {
  size: Extract<ElementSizes, "m" | "l">;
  labelText: string;
  message?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  writeble?: boolean;
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
  writeble,
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
    [styles.inputPseudoDisabled]: disabled && writeble,
  });

  const inputWrapperClasses = cn({
    [styles.inputWrapper]: true,
    [styles.inputWrapperM]: size === "m",
    [styles.inputWrapperL]: size === "l",
    [styles.inputWrapperActive]: isActive,
    [styles.inputWrapperDisabled]: disabled && !writeble,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

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
        onFocus: () => {
          setIsActive(true);
        },
        onBlur: (e: ChangeEvent<HTMLInputElement>) => {
          setIsActive(false);
          register.onBlur(e);
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
      onFocus: () => {
        setIsActive(true);
      },
      onBlur: () => {
        setIsActive(false);
      },
    };
  };
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
            autoComplete={"new-password"}
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
