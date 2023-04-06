import cn from "classnames";
import { ElementSizes } from "types/element-props";
import { ReactNode } from "react";
import styles from "./text.module.sass";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size: ElementSizes;
  children: ReactNode;
  bold?: boolean;
}

export const Text = ({
  size,
  bold = false,
  children,
  className,
}: TextProps) => {
  const textStyles = {
    [styles.xl]: size === "xl",
    [styles.l]: size === "l",
    [styles.m]: size === "m",
    [styles.s]: size === "s",
    [styles.xs]: size === "xs",
    [styles.bold]: bold,
  };

  return <span className={cn(textStyles, className)}>{children}</span>;
};
