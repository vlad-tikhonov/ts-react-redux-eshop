import { InputProps, Input } from "ui";
import cn from "classnames";
import { RenderIcon } from "types";
import styles from "./input-text.module.sass";
import { useState } from "react";

interface InputTextProps extends InputProps {
  label?: string;
  renderLeftIcon?: RenderIcon;
  renderRightIcon?: RenderIcon;
}

export const InputText = ({
  inputSize,
  label,
  disabled,
  className,
  renderLeftIcon,
  renderRightIcon,
  ...restProps
}: InputTextProps) => {
  const [isActive, setIsActive] = useState(false);

  const inputWrapperClasses = cn({
    [styles.inputWrapper]: true,
    [styles.inputWrapper_active]: isActive,
    [styles.inputWrapper_disabled]: disabled,
    [styles.inputWrapper_m]: inputSize === "m",
    [styles.inputWrapper_l]: inputSize === "l",
  });

  const labelClasses = cn({
    [styles.label]: true,
    [styles.label_m]: inputSize === "m",
    [styles.label_l]: inputSize === "l",
  });

  const iconsClasses = cn({
    [styles.icon]: true,
    [styles.icon_m]: inputSize === "m",
    [styles.icon_l]: inputSize === "l",
  });

  return (
    <div
      className={cn(styles.wrapper, className)}
      onFocus={() => {
        setIsActive(true);
      }}
      onBlur={() => {
        setIsActive(false);
      }}
    >
      {label && <span className={labelClasses}>{label}</span>}
      <div className={inputWrapperClasses}>
        {renderLeftIcon && renderLeftIcon(iconsClasses)}
        <Input inputSize={inputSize} disabled={disabled} {...restProps} />
        {renderRightIcon && renderRightIcon(iconsClasses)}
      </div>
    </div>
  );
};
