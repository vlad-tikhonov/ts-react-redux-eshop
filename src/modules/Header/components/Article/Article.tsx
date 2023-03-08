import cn from "classnames";
import styles from "./Article.module.sass";
import { Text, Button, Htag } from "ui";

interface Article {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export const Article = ({
  image,
  date,
  title,
  description,
  link,
  className,
}: Article) => {
  return (
    <article className={cn(styles.article, className)}>
      <div className={styles.header}>
        <img src={image} alt="article img" />
      </div>
      <div className={styles.body}>
        <div className={styles.date}>
          <Text size="xs">{date}</Text>
        </div>
        <div className={styles.title}>
          <Htag size="xs">{title}</Htag>
        </div>
        <div className={styles.description}>
          <Text size="s">{description}</Text>
        </div>
        <Button size="m" decoration="default" accent="secondary">
          Подробнее
        </Button>
      </div>
    </article>
  );
};
