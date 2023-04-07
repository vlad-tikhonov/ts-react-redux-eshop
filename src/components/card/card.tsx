import cn from "classnames";
import styles from "./card.module.sass";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Card = ({
  children,
  isActive,
  className,
  ...restProps
}: CardProps) => {
  return (
    <div
      className={cn(
        {
          [styles.card]: true,
          [styles.card_active]: isActive,
        },
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export interface CardElementProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = ({
  children,
  className,
  ...restProps
}: CardElementProps) => {
  return (
    <div className={cn(styles.header, className)} {...restProps}>
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
  ...restProps
}: CardElementProps) => {
  return (
    <div className={cn(styles.body, className)} {...restProps}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  children,
  className,
  ...restProps
}: CardElementProps) => {
  return (
    <div className={cn(styles.footer, className)} {...restProps}>
      {children}
    </div>
  );
};
