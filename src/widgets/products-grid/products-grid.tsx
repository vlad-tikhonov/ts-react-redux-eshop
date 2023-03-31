import { ProductWithReviewsInfo } from "types";
import { ProductCard } from "widgets";
import cn from "classnames";
import styles from "./products-grid.module.sass";

interface ProductGridProps {
  className?: string;
  products: ProductWithReviewsInfo[];
}

export const ProductsGrid = ({ products, className }: ProductGridProps) => {
  return (
    <div className={cn(styles.products, className)}>
      {products.map((p) => (
        <ProductCard product={p} key={p._id} />
      ))}
    </div>
  );
};
