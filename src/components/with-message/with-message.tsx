import styles from "./with-message.module.sass";

interface WithMessageProps {
  message?: string;
  children: JSX.Element;
}

export const WithMessage = ({ message, children }: WithMessageProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <span className={styles.message}>{message}</span>
    </div>
  );
};
