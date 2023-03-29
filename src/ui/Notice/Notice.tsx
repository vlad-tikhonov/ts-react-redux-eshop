import cn from "classnames";
import { ElementAccent, ElementSizes } from "types";
import { Text } from "ui";
import styles from "./notice.module.sass";

type NoticeAccent<T> = "gray" | "success" | T;

interface NoticeProps {
  size: Extract<ElementSizes, "m" | "s">;
  accent: NoticeAccent<ElementAccent>;
  children: string | number;
  className?: string;
}

export const Notice = ({ size, accent, children, className }: NoticeProps) => {
  const noticeStyles = {
    [styles.notice]: true,
    [styles.primary]: accent === "primary",
    [styles.gray]: accent === "gray",
    [styles.error]: accent === "error",
    [styles.secondary]: accent === "secondary",
    [styles.success]: accent === "success",
  };

  const textStyles = {
    [styles.text]: true,
    [styles.text_gray]: accent === "gray",
  };

  return (
    <span className={cn(noticeStyles, className)}>
      <Text size={size === "m" ? "s" : "xs"} className={cn(textStyles)}>
        {children}
      </Text>
    </span>
  );
};
