import styles from "./article-card.module.sass";
import { Text, Button } from "ui";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardProps } from "components";

interface ArticleProps extends CardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export const ArticleCard = ({
  image,
  date,
  title,
  description,
  link,
}: ArticleProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Card
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      isActive={isActive}
      className={styles.article}
    >
      <CardHeader className={styles.header}>
        <img src={image} alt="article img" width={376} height={162} />
      </CardHeader>
      <CardBody className={styles.body}>
        <div className={styles.date}>
          <Text size="xs">{date}</Text>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>
          <Text size="s">{description}</Text>
        </div>
        <div>
          <Button
            size="m"
            decoration="default"
            accent="secondary"
            disabled={!isActive}
            aria-label={`Подробнее о ${title}`}
          >
            Подробнее
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
