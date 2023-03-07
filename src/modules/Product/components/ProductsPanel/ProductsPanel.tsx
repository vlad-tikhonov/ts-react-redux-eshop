import { Htag } from "components";
import { ProductCard } from "..";
import { ProductWithReviewsAvg } from "types";
import styles from "./ProductsPanel.module.sass";

interface ProductsPanelProps {
  title: string;
  products: ProductWithReviewsAvg[];
  className?: string;
}

export const ProductsPanel = ({
  title,
  products,
  className,
}: ProductsPanelProps) => {
  return (
    <div className={styles.panel}>
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
