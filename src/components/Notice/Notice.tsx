import cn from "classnames";
import { ElementAccent, ElementSizes } from "types";
import styles from "./Notice.module.sass";

type NoticeAccent<T> = "gray" | "success" | T;

interface NoticeProps {
  size: Extract<ElementSizes, "m" | "s">;
  accent: NoticeAccent<ElementAccent>;
  children: string;
  className?: string;
}

export const Notice = ({ size, accent, children, className }: NoticeProps) => {
  const noticeStyles = {
    [styles.notice]: true,
    [styles.s]: size === "s",
    [styles.m]: size === "m",
    [styles.primary]: accent === "primary",
    [styles.gray]: accent === "gray",
    [styles.error]: accent === "error",
    [styles.secondary]: accent === "secondary",
    [styles.success]: accent === "success",
  };
  return <span className={cn(noticeStyles, className)}>{children}</span>;
};
