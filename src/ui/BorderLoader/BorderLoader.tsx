import cn from "classnames";
import styles from "./BorderLoader.module.sass";
import { ElementAccent } from "types";

interface BorderLoaderProps {
  accent: ElementAccent;
  className?: string;
}

export const BorderLoader = ({
  accent = "secondary",
  className,
}: BorderLoaderProps) => (
  <span
    className={cn(styles.spinner, className, {
      [styles.spinner_primary]: accent === "primary",
      [styles.spinner_secondary]: accent === "secondary",
      [styles.spinner_grayscale]: accent === "grayscale",
      [styles.spinner_error]: accent === "error",
    })}
  ></span>
);
