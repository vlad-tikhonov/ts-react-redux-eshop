import cn from "classnames";
import styles from "./article.module.sass";
import { Text, Button, Htag } from "ui";
import { useState } from "react";
interface ArticleProps {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export const Article = ({
  image,
  date,
  title,
  description,
  link,
}: ArticleProps) => {
  const [activeArticle, setActiveArticle] = useState(false);

  const onMouseEnter = () => {
    setActiveArticle(true);
  };

  const onMouseLeave = () => {
    setActiveArticle(false);
  };

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn({
        [styles.article]: true,
        [styles.article_active]: activeArticle,
      })}
    >
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
        <div>
          <Button
            size="m"
            decoration="default"
            accent="secondary"
            disabled={!activeArticle}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </article>
  );
};
