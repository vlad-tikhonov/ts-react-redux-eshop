import { Htag, Text, Rating, Button } from "components";
import { Review, ProductWithReviews } from "types";
import cn from "classnames";
import styles from "./ProductReviews.module.sass";
import { useState } from "react";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { formatDate } from "helpers/utils";
interface ProductReviewsProps {
  reviews: Review[];
  reviewsAvg: ProductWithReviews["reviewsAvg"];
  className?: string;
}

export const ProductReviews = ({
  reviews,
  reviewsAvg,
  className,
}: ProductReviewsProps) => {
  const [rating, setRating] = useState(0);

  const ratingCount = (num: number) => {
    return reviews.reduce((acc, el) => (el.rating === num ? acc + 1 : acc), 0);
  };

  return (
    <div className={className}>
      <Htag size="m" className={styles.title}>
        Отзывы
      </Htag>
      <div className={styles.reviews_wrapper}>
        <div className={styles.left}>
          <div className={cn(styles.row, styles.row_title)}>
            <Rating rating={reviewsAvg ? reviewsAvg : 0} readonly />
            <Text size="m" bold>
              {reviewsAvg ? reviewsAvg : 0} из 5
            </Text>
          </div>
          <div className={styles.row}>
            <Text size="s">5</Text>
            <Rating rating={5} readonly />
            <Text size="s">{ratingCount(5)}</Text>
          </div>
          <div className={styles.row}>
            <Text size="s">4</Text>
            <Rating rating={4} readonly />
            <Text size="s">{ratingCount(4)}</Text>
          </div>
          <div className={styles.row}>
            <Text size="s">3</Text>
            <Rating rating={3} readonly />
            <Text size="s">{ratingCount(3)}</Text>
          </div>
          <div className={styles.row}>
            <Text size="s">2</Text>
            <Rating rating={2} readonly />
            <Text size="s">{ratingCount(2)}</Text>
          </div>
          <div className={styles.row}>
            <Text size="s">1</Text>
            <Rating rating={1} readonly />
            <Text size="s">{ratingCount(1)}</Text>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.reviews}>
            {reviews.map((r) => (
              <div className={styles.review} key={r._id}>
                <div className={styles.user}>
                  <UserIcon className={styles.icon} />
                  <Text size="m">{r.name}</Text>
                </div>
                <div className={styles.rating}>
                  <Rating rating={r.rating} readonly className={styles.stars} />
                  <Text size="xs" className={styles.createdAt}>
                    {formatDate(new Date(r.createdAt))}
                  </Text>
                </div>
                <div className={styles.body}>
                  <Text size="s">{r.description}</Text>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.new}>
            <div className={styles.rating}>
              <Text size="m" bold className={styles.rating_title}>
                Ваша оценка
              </Text>
              <Rating rating={rating} setRating={setRating} big readonly />
            </div>
            <form action="" className={styles.form}>
              <textarea
                name=""
                id=""
                rows={5}
                className={styles.textArea}
                disabled
              ></textarea>
              <Button decoration="default" size="m" accent="primary" disabled>
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
