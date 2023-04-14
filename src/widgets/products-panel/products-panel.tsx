import { Htag } from "ui";
import { ProductCard, SkeletonProductCard } from "widgets";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import styles from "./products-panel.module.sass";
import { useEffect, useState } from "react";
import { useDebounce } from "hooks";

interface ProductsPanelProps {
  title: string;
  products: ProductWithReviewsInfo[];
  isLoading: boolean;
  className?: string;
}

export const ProductsPanel = ({
  title,
  products,
  className,
  isLoading,
}: ProductsPanelProps) => {
  // const test = useDebounce(isLoading, 1000);
  // console.log(test);
  const [test, setTest] = useState(true);

  useEffect(() => {
    if (!isLoading && !!products) {
      setTimeout(() => {
        setTest(false);
      }, 500);
    }
  }, [isLoading, products]);

  return (
    <div className={cn(styles.panel, className)}>
      <Htag size="m" className={styles.title}>
        {title}
      </Htag>
      <div className={styles.products}>
        {test
          ? new Array(4)
              .fill(null)
              .map((e, i) => <SkeletonProductCard key={i} />)
          : products.map((p) => <ProductCard product={p} key={p._id} />)}
      </div>
    </div>
  );
};
