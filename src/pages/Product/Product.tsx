import { Htag } from "ui";
import { Breadcrumbs } from "widgets";
import { useProduct } from "store/product/use-product";
import { useParams } from "react-router-dom";
import { ProductBody } from "./ProductBody/ProductBody";
import { ProductMenu } from "./ProductMenu/ProductMenu";
import { ProductReviews } from "./ProductReviews/ProductReviews";
import styles from "./Product.module.sass";

export const Product = () => {
  const { productSlug } = useParams();
  const [product, { isLoading, errors }] = useProduct(productSlug);

  if (isLoading) {
    return <div>"Loading product"</div>;
  }

  if (product) {
    const breadcrumbItems = [
      { label: "Каталог", to: "/categories", end: true },
      {
        label: product?.categoryTitle,
        to: `/categories/${product?.categorySlug}`,
        end: true,
      },
      {
        label: product?.title,
        to: "",
        end: true,
      },
    ];

    return (
      <>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="s">{product.title}</Htag>
        <ProductMenu product={product} />
        <ProductBody product={product} />
        <ProductReviews
          productId={product._id}
          reviewsAvg={product.reviewsAvg}
        />
      </>
    );
  }

  return null;
};
