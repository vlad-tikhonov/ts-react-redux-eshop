import { ArticleCard } from "widgets";
import { Htag } from "ui";
import cn from "classnames";
import manImg from "./images/man.png";
import springImg from "./images/spring.png";
import foodImg from "./images/food.png";
import styles from "./articles.module.sass";

export const articlesData = [
  {
    image: manImg,
    date: "05.03.2023",
    title: "Режим использования масок и перчаток на территории магазинов",
    description:
      'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день',
    link: "",
    className: styles.article,
  },
  {
    image: springImg,
    date: "05.03.2023",
    title: "Весеннее настроение для каждой",
    description:
      "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
    link: "",
    className: styles.article,
  },
  {
    image: foodImg,
    date: "22.02.2023",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description:
      "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
    link: "",
    className: styles.article,
  },
];

interface ArticlesProps {
  className?: string;
}

export const Articles = ({ className }: ArticlesProps) => {
  return (
    <div className={cn(styles.articles, className)}>
      <Htag size="m" className={styles.title}>
        Статьи
      </Htag>
      <div className={styles.items}>
        {articlesData.map((a, i) => (
          <ArticleCard {...a} key={i} />
        ))}
      </div>
    </div>
  );
};
