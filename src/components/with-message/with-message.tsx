import styles from "./with-message.module.sass";
import cn from "classnames";

interface WithMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  children: JSX.Element;
}

export const WithMessage = ({
  message,
  children,
  className,
  ...restpProps
}: WithMessageProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...restpProps}>
      {children}
      <span className={styles.message}>{message}</span>
    </div>
  );
};
