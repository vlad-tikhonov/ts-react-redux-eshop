import styles from "./ProductBody.module.sass";
import { ProductWithReviewsAndRelated } from "types";
import { modifyDiscount, modifyPrice } from "helpers/utils";
import { Notice, Text, Htag, Button } from "ui";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { MiniProductCard, ProductCartButton } from "..";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addToCart, decreaseProductCount } from "features/cart/cart-slice";
import { selectProductCount } from "features/cart/cart-selectors";

interface ProductBodyProps {
  product: ProductWithReviewsAndRelated;
  className?: string;
}

const CartRenderIcon = (className: string) => (
  <CartIcon className={className} />
);

export const ProductBody = ({ product, className }: ProductBodyProps) => {
  const dispatch = useAppDispatch();
  const {
    _id,
    image,
    title,
    discount,
    priceWithCard,
    price,
    description: { brand, country, package: pack },
    relatedProducts,
  } = product;

  const productCount = useAppSelector(selectProductCount(_id));

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(decreaseProductCount(_id));
  };

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
        {productCount > 0 ? (
          <ProductCartButton
            addToCart={handleAdd}
            removeFromCart={handleRemove}
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
        <div className={styles.bonus_wrapper}>
          <SmileIcon className={styles.smile} />
          <Text size="xs" className={styles.text}>
            Вы получаете{" "}
            <b>
              {priceWithCard
                ? Math.floor(priceWithCard / 10)
                : Math.floor(price / 10)}{" "}
              бонусов
            </b>
          </Text>
        </div>
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
