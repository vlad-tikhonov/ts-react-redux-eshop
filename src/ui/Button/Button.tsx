import cn from "classnames";
import styles from "./Button.module.sass";
import {
  ElementSizes,
  ElementAccent,
  ElementDecoration,
} from "types/element-props";
import { ButtonHTMLAttributes } from "react";

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

export const Button = (props: ButtonProps) => {
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
    if (onClick) {
      onClick();
    }

    return;
  };

  return (
    <button
      className={cn(buttonStyles, className)}
      disabled={disabled}
      type={type}
      onClick={disabled ? undefined : handleClick}
    >
      {renderLeftIcon(styles.icon)}
      {children && <span className={styles.text}>{children}</span>}
      {renderRightIcon(styles.icon)}
    </button>
  );
};
