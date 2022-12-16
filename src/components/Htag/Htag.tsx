import cn from "classnames";
import { ElementSizes } from "types/element-props";
import styles from "./Htag.module.sass";

interface HtagProps {
  size: ElementSizes;
  children: string;
  className?: string;
}

export const Htag = ({ size, children, className }: HtagProps) => {
  switch (size) {
    case "xl":
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;
    case "l":
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    case "m":
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;
    case "s":
      return <h4 className={cn(styles.h4, className)}>{children}</h4>;
    case "xs":
      return <h5 className={cn(styles.h5, className)}>{children}</h5>;
    default:
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;
  }
};
