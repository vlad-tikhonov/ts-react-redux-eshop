import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { ProductCard } from "widgets";
import styles from "./test.module.sass";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

const options = [
  "option 1option1option",
  "option 2option1option",
  "option 3option1option",
];
const product = {
  _id: "63fa6fa2f13d72882659d91a",
  image: "product/63fa6fa2f13d72882659d91a.webp",
  title:
    "Растительный напиток Nemoloko овсяный классический лайт, обогащенный кальцием и витамином В2, 1,5%, 1 л",
  price: 155,
  priceWithCard: 152,
  discount: 13,
  description: {
    brand: "ЭкоНива",
    country: "Россия",
    package: "1л",
  },
  categoryId: "63f5d906ddbc7b8d67ba366a",
  categoryTitle: "Молоко, сыр, яйцо",
  categorySlug: "moloko-syr-yajco",
  tags: ["Товары нашего производства", "Без ГМО", "Полезное питание"],
  code: "899724",
  slug: "rastitelnyj-napitok-nemoloko",
  createdAt: "2023-02-25T20:29:22.923Z",
  updatedAt: "2023-02-25T20:29:22.923Z",
  __v: 0,
  reviewsAvg: 1,
  reviewsCount: 1,
};

export const Test = () => {
  return (
    <div className={styles.test}>
      <div className={styles.row}>
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default Test;
