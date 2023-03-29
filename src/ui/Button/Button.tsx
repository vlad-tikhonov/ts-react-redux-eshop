import cn from "classnames";
import {
  ElementSizes,
  ElementAccent,
  ElementDecoration,
} from "types/element-props";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./button.module.sass";

export interface ButtonProps {
  size: Exclude<ElementSizes, "xl" | "xs">;
  children?: string;
  renderLeftIcon?: (className: string) => JSX.Element;
  renderRightIcon?: (className: string) => JSX.Element;
  accent: ElementAccent;
  decoration?: ElementDecoration;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      renderLeftIcon = () => null,
      renderRightIcon = () => null,
      accent,
      decoration = "default",
      size,
      type = "button",
      children,
      disabled = false,
      onClick,
      className,
    } = props;

    const buttonStyles = {
      [styles.btn]: true,
      [styles.btn_l]: size === "l",
      [styles.btn_m]: size === "m",
      [styles.btn_s]: size === "s",

      [styles.btn_primary]: accent === "primary",
      [styles.btn_secondary]: accent === "secondary",
      [styles.btn_grayscale]: accent === "grayscale",
      [styles.btn_error]: accent === "error",

      [styles.btn_outline]: decoration === "outline",
      [styles.btn_no]: decoration === "no",
    };

    const handleClick = () => {
      if (disabled || !onClick) {
        return;
      }

      onClick();
    };

    return (
      <button
        className={cn(buttonStyles, className)}
        disabled={disabled}
        type={type}
        onClick={disabled ? undefined : handleClick}
        ref={ref}
      >
        {renderLeftIcon(styles.icon)}
        {children && <span className={styles.text}>{children}</span>}
        {renderRightIcon(styles.icon)}
      </button>
    );
  }
);
