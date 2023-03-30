import { ProductWithReviewsInfoAndRelated } from "types";
import { modifyDiscount, modifyPrice } from "helpers/utils";
import { Text, Htag, Button } from "ui";
import { Notice } from "components";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { ProductCartButton } from "components";
import { MiniProductCard } from "./mini-product-card/mini-product-card";
import cn from "classnames";
import { Bonuses } from "widgets";
import { useCartActions, useProductCount } from "store/cart/features";
import styles from "./product-body.module.sass";

interface ProductBodyButtonProps {
  product: ProductWithReviewsInfoAndRelated;
}

const ProductBodyButton = ({ product }: ProductBodyButtonProps) => {
  const productCount = useProductCount(product._id);
  const { add, decrease } = useCartActions();

  const handleAdd = () => {
    add(product);
  };

  const handleDecrease = () => {
    decrease(product._id);
  };

  return (
    <>
      {productCount > 0 ? (
        <ProductCartButton
          addToCart={handleAdd}
          removeFromCart={handleDecrease}
          size="l"
          className={styles.btn}
        >
          {productCount}
        </ProductCartButton>
      ) : (
        <Button
          size="l"
          accent="primary"
          decoration="default"
          renderLeftIcon={CartRenderIcon}
          onClick={handleAdd}
          className={styles.btn}
        >
          В корзину
        </Button>
      )}
    </>
  );
};

interface ProductBodyProps {
  product: ProductWithReviewsInfoAndRelated | null;
  className?: string;
}

const CartRenderIcon = (className: string) => (
  <CartIcon className={className} />
);

export const ProductBody = ({ product, className }: ProductBodyProps) => {
  if (!product) {
    return null;
  }

  const {
    image,
    title,
    discount,
    priceWithCard,
    price,
    description: { brand, country, package: pack },
    relatedProducts,
  } = product;

  return (
    <div className={cn(styles.body, className)}>
      <div className={styles.body_img}>
        <img
          src={process.env.REACT_APP_STATIC_CONTENT_URL + image}
          alt={title}
        />
        {discount && (
          <Notice accent="primary" size="m" className={styles.notice}>
            {modifyDiscount(discount)}
          </Notice>
        )}
      </div>
      <div className={styles.body_info}>
        <div className={styles.price_wrapper}>
          {discount && priceWithCard ? (
            <>
              <div className={styles.price}>
                <Text size="l">{modifyPrice(price)}</Text>
                <Htag size="m">{modifyPrice(priceWithCard)}</Htag>
              </div>
              <div className={styles.labels}>
                <Text size="xs" className={styles.label}>
                  Обычная цена
                </Text>
                <Text size="xs" className={styles.label}>
                  С картой Северяночки
                </Text>
              </div>
            </>
          ) : (
            <Htag size="m">{modifyPrice(price)}</Htag>
          )}
        </div>
        <ProductBodyButton product={product} />
        <Bonuses
          className={styles.bonuses}
          count={
            priceWithCard
              ? Math.floor(priceWithCard / 10)
              : Math.floor(price / 10)
          }
        />
        <div className={styles.features_wrapper}>
          <table className={styles.table}>
            <tbody className={styles.table_body}>
              <tr className={styles.odd}>
                <td>
                  <Text size="xs">Бренд</Text>
                </td>
                <td>
                  <Text size="xs" bold>
                    {brand}
                  </Text>
                </td>
              </tr>
              <tr className={styles.even}>
                <td>
                  <Text size="xs">Страна производителя</Text>
                </td>
                <td>
                  <Text size="xs" bold>
                    {country}
                  </Text>
                </td>
              </tr>
              <tr className={styles.odd}>
                <td>
                  <Text size="xs">Упаковка</Text>
                </td>
                <td>
                  <Text size="xs" bold>
                    {pack}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.body_similar}>
        <Text size="s" className={styles.title}>
          Похожие
        </Text>
        {relatedProducts.map((p) => (
          <MiniProductCard
            image={p.image}
            title={p.title}
            link={"/categories/" + p.categorySlug + "/" + p.slug}
            price={p.price}
            key={p._id}
          />
        ))}
      </div>
    </div>
  );
};
