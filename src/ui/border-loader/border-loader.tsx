import cn from "classnames";
import { ElementAccent } from "types";
import styles from "./border-loader.module.sass";

interface BorderLoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  accent: ElementAccent;
}

export const BorderLoader = ({
  accent = "secondary",
  className,
  ...restPorps
}: BorderLoaderProps) => (
  <span
    className={cn(styles.spinner, className, {
      [styles.spinner_primary]: accent === "primary",
      [styles.spinner_secondary]: accent === "secondary",
      [styles.spinner_grayscale]: accent === "grayscale",
      [styles.spinner_error]: accent === "error",
    })}
    {...restPorps}
  ></span>
);
