import cn from "classnames";
import { ElementSizes } from "types/element-props";
import styles from "./Text.module.sass";

interface TextProps {
  size: ElementSizes;
  children: string;
  bold?: boolean;
  className?: string;
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
    [styles.bold]: bold === true,
  };

  return <span className={cn(className, textStyles)}>{children}</span>;
};
