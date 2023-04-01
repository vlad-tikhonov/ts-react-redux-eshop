import styles from "./about-block.module.sass";
import cn from "classnames";

interface AboutBlockProps {
  className?: string;
}

export const AboutBlock = ({ className }: AboutBlockProps) => {
  return (
    <div className={cn(styles.overlay, className)}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1 className={styles.title}>О компании</h1>
          <p className={styles.paragraph}>
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
            заботимся о наших клиентах, стремимся к лучшему будущему.
          </p>
        </div>
      </div>
      <div className={styles.overlayBg}></div>
      <div className={styles.image}>
        <div className={styles.image_bg}></div>
        <div className={styles.image_image}></div>
      </div>
    </div>
  );
};
