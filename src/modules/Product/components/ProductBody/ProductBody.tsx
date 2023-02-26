import styles from "./ProductBody.module.sass";
import { ProductWithRelated, ProductDescription } from "types";
import { modifyDiscount, modifyPrice } from "helpers/utils";
import { Notice, Text, Htag, Button } from "components";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { MiniProductCard } from "..";

interface ProductBodyProps {
  title: ProductWithRelated["title"];
  image: ProductWithRelated["image"];
  discount?: ProductWithRelated["discount"];
  price: ProductWithRelated["price"];
  priceWithCard: ProductWithRelated["priceWithCard"];
  relatedProducts: ProductWithRelated["relatedProducts"];
  brand: ProductDescription["brand"];
  country: ProductDescription["country"];
  pack: ProductDescription["package"];
}

const CartRenderIcon = (className: string) => (
  <CartIcon className={className} />
);

export const ProductBody = ({
  title,
  image,
  discount,
  price,
  priceWithCard,
  brand,
  country,
  pack,
  relatedProducts,
}: ProductBodyProps) => (
  <div className={styles.body}>
    <div className={styles.body_img}>
      <img src={process.env.REACT_APP_STATIC_CONTENT_URL + image} alt={title} />
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
          <Htag size="m">{price}</Htag>
        )}
      </div>
      <Button
        size="l"
        accent="primary"
        decoration="default"
        renderLeftIcon={CartRenderIcon}
        className={styles.btn}
      >
        В корзину
      </Button>
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
