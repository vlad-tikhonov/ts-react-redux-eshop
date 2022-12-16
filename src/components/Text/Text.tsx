import cn from "classnames";
import { ElementSizes } from "types/element-props";
import style from "./Text.module.sass";

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
    [style.xl]: size === "xl",
    [style.l]: size === "l",
    [style.m]: size === "m",
    [style.s]: size === "s",
    [style.xs]: size === "xs",
    [style.bold]: bold === true,
  };

  return <span className={cn(className, textStyles)}>{children}</span>;
};
