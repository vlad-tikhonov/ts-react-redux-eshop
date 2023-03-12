import { Breadcrumbs, Htag } from "ui";
import { useProduct } from "features/product/use-product";
import { Container, Wrapper } from "layouts";
import { useParams } from "react-router-dom";
import {
  ProductBody,
  ProductMenu,
  ProductReviews,
} from "modules/Product/components";
import styles from "./Product.module.sass";

export const Product = () => {
  const { productSlug } = useParams();
  const [product, { isLoading, error }] = useProduct(productSlug);

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
      <Wrapper>
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
          <Htag size="s">{product.title}</Htag>
          <ProductMenu
            code={product.code}
            reviewsAvg={product.reviewsAvg}
            reviewsCount={product.reviewsCount}
          />
          <ProductBody product={product} />
          <ProductReviews
            reviewsAvg={product.reviewsAvg}
            reviews={product.reviews}
          />
        </Container>
      </Wrapper>
    );
  }

  return null;
};
