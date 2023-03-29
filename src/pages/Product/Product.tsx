import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { useProduct } from "store/product/use-product";
import { useLocation, useParams } from "react-router-dom";
import { ProductBody } from "./product-body/product-body";
import { ProductMenu } from "./product-menu/product-menu";
import { ProductReviews } from "./product-reviews/product-reviews";
import { ErrorDetecter } from "components";
import styles from "./product.module.sass";

export const Product = () => {
  const location = useLocation();
  const { productSlug } = useParams();
  const [product, { isLoading, errors }] = useProduct(productSlug);

  if (isLoading) {
    return <div>"Loading product"</div>;
  }

  const breadcrumbItems = [
    { label: "Каталог", to: "/categories", end: true },
    {
      label: product?.categoryTitle ?? "",
      to: `/categories/${product?.categorySlug}` ?? "",
      end: true,
    },
    {
      label: product?.title ?? "",
      to: "",
      end: true,
    },
  ];

  return (
    <ErrorDetecter errors={errors} pathname={location.pathname}>
      <>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="s" className={styles.title}>
          {product?.title}
        </Htag>
        <ProductMenu product={product} className={styles.menu} />
        <ProductBody product={product} className={styles.body} />
        <ProductReviews
          productId={product?._id ?? ""}
          reviewsAvg={product?.reviewsAvg ?? 0}
        />
      </>
    </ErrorDetecter>
  );
};
