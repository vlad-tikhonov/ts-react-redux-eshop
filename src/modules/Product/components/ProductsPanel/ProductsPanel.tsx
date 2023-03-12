import { Htag } from "ui";
import { ProductCard } from "..";
import { ProductWithReviewsInfo } from "types";
import cn from "classnames";
import styles from "./ProductsPanel.module.sass";

interface ProductsPanelProps {
  title: string;
  products: ProductWithReviewsInfo[];
  className?: string;
}

export const ProductsPanel = ({
  title,
  products,
  className,
}: ProductsPanelProps) => {
  return (
    <div className={cn(styles.panel, className)}>
      <Htag size="m" className={styles.title}>
        {title}
      </Htag>
      <div className={styles.products}>
        {products.map((p) => (
          <ProductCard product={p} key={p._id} />
        ))}
      </div>
    </div>
  );
};
