import cn from "classnames";
import { ReactNode } from "react";
import { ElementSizes } from "types/element-props";
import styles from "./htag.module.sass";

interface HtagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size: ElementSizes;
  children: ReactNode;
}

export const Htag = ({
  size,
  children,
  className,
  ...restProps
}: HtagProps) => {
  switch (size) {
    case "xl":
      return (
        <h1 className={cn(styles.h1, className)} {...restProps}>
          {children}
        </h1>
      );
    case "l":
      return (
        <h2 className={cn(styles.h2, className)} {...restProps}>
          {children}
        </h2>
      );
    case "m":
      return (
        <h3 className={cn(styles.h3, className)} {...restProps}>
          {children}
        </h3>
      );
    case "s":
      return (
        <h4 className={cn(styles.h4, className)} {...restProps}>
          {children}
        </h4>
      );
    case "xs":
      return (
        <h5 className={cn(styles.h5, className)} {...restProps}>
          {children}
        </h5>
      );
    default:
      return (
        <h1 className={cn(styles.h1, className)} {...restProps}>
          {children}
        </h1>
      );
  }
};
