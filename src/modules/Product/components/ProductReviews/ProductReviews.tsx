import { Htag, Text, Rating, Button } from "ui";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import styles from "./ProductReviews.module.sass";
import { useState } from "react";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { formatDate } from "helpers/utils";
import { useAuth } from "features/auth/use-auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { selectToken } from "features/auth/auth-selectors";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useReviews } from "features/reviews/use-reviews";
import { createReview } from "features/reviews/reviews-slice";
interface ProductReviewsProps {
  productId: ProductWithReviewsInfo["_id"];
  reviewsAvg: ProductWithReviewsInfo["reviewsAvg"];
  className?: string;
}

interface FormValues {
  reviewText: string;
}

export const ProductReviews = ({
  productId,
  reviewsAvg,
  className,
}: ProductReviewsProps) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const [reviews, { isLoading, errors: reviewsErrors }] = useReviews(productId);

  const ratingCount = (num: number) => {
    if (reviews) {
      return reviews.reduce(
        (acc, el) => (el.rating === num ? acc + 1 : acc),
        0
      );
    }
    return 0;
  };

  const [user] = useAuth();
  const accessToken = useAppSelector(selectToken);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (user && accessToken) {
      dispatch(
        createReview({
          review: {
            name: user.name + " " + user.surname,
            description: data.reviewText,
            productId,
            rating,
          },
          token: accessToken,
        })
      ).then(() => {
        reset();
        setRating(0);
      });
    }
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
            {reviews?.map((r) => (
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
              <Rating
                rating={rating}
                setRating={setRating}
                big
                readonly={!user}
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.form}
              name="x"
            >
              <textarea
                rows={5}
                className={styles.textArea}
                disabled={!user}
                {...register("reviewText", { required: true, minLength: 10 })}
              ></textarea>
              <Button
                decoration="default"
                size="m"
                accent="primary"
                disabled={!user || !isValid}
                type="submit"
              >
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
