import { ElementSizes } from "types";
import cn from "classnames";
import styles from "./input.module.sass";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: Extract<ElementSizes, "m" | "l">;
}

export const Input = ({ inputSize, className, ...restProps }: InputProps) => {
  const inputClasses = {
    [styles.input]: true,
    [styles.input_m]: inputSize === "m",
    [styles.input_l]: inputSize === "l",
  };

  return <input className={cn(inputClasses, className)} {...restProps} />;
};
