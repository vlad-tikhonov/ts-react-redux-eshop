import { Htag } from "ui";
import { ProductCard, SkeletonProductCard } from "widgets";
import { ProductWithReviewsInfo } from "types";
import { useBoolTimeout } from "hooks";
import styles from "./products-panel.module.sass";
import cn from "classnames";
import { SKELETONS_SHOW_TIME } from "constants/";
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
  const isShowProducts = useBoolTimeout({
    condition: !isLoading && !!products,
    delay: SKELETONS_SHOW_TIME,
  });

  return (
    <div className={cn(styles.panel, className)}>
      <Htag size="m" className={styles.title}>
        {title}
      </Htag>
      <div className={styles.products}>
        {isShowProducts
          ? products.map((p) => <ProductCard product={p} key={p._id} />)
          : new Array(4)
              .fill(null)
              .map((e, i) => <SkeletonProductCard key={i} />)}
      </div>
    </div>
  );
};
