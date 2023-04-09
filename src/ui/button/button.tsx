import cn from "classnames";
import {
  ElementSizes,
  ElementAccent,
  ElementDecoration,
} from "types/element-props";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./button.module.sass";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Exclude<ElementSizes, "xl" | "xs">;
  accent: ElementAccent;
  renderRightIcon?: (className: string) => JSX.Element;
  renderLeftIcon?: (className: string) => JSX.Element;
  decoration?: ElementDecoration;
  children?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      renderLeftIcon = () => null,
      renderRightIcon = () => null,
      accent,
      decoration = "default",
      size,
      children,
      className,
      type = "button",
      ...restProps
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
    return (
      <button
        type={type}
        className={cn(buttonStyles, className)}
        ref={ref}
        {...restProps}
      >
        {renderLeftIcon(styles.icon)}
        {children && <span className={styles.text}>{children}</span>}
        {renderRightIcon(styles.icon)}
      </button>
    );
  }
);
