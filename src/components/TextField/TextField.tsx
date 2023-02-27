import styles from "./TextField.module.sass";
import cn from "classnames";
import { ElementSizes } from "types";
import { Text } from "components";
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useActiveElement } from "hooks";

interface TextFieldProps {
  register: UseFormRegisterReturn;
  placeholder: string;
  size: Extract<ElementSizes, "m" | "l">;
  labelText: string;
  message?: string;
  disabled?: boolean;
  type?:
    | Extract<HTMLInputTypeAttribute, "text" | "password" | "email" | "number">
    | undefined;
  className?: string;
  renderLeftIcon?: (className: string) => JSX.Element;
  renderRightIcon?: (className: string) => JSX.Element;
}

export const TextField = ({
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

  const inputRef = useRef(null);
  const activeElement = useActiveElement();

  useEffect(() => {
    inputRef.current === activeElement ? setIsActive(true) : setIsActive(false);
  }, [activeElement]);

  const reactHookFormProps: UseFormRegisterReturn = {
    ...register,
    ref: (el) => {
      inputRef.current = el;
      register.ref(el);
    },
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
            autoComplete="off"
            className={inputClasses}
            {...reactHookFormProps}
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
