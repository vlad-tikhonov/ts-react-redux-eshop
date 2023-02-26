import { Breadcrumbs, Button, Htag, Notice, Rating, Text } from "components";
import { useProduct } from "features/product/useProduct";
import { Container } from "layouts";
import { useParams } from "react-router-dom";
import {
  ProductWithRelated as IProduct,
  ProductDescription as IProductDescription,
} from "types";
import styles from "./Product.module.sass";
import cn from "classnames";
import { ReactComponent as ShareIcon } from "assets/icons/share.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "assets/icons/shopping-cart.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { modifyDiscount, modifyPrice } from "helpers/utils";
import { MiniProductCard } from "shared-components";

type ProductMenuProps = {
  code: IProduct["code"];
  rating: IProduct["rating"];
  reviewsCount: IProduct["reviewsCount"];
  className?: string;
};

const ShareRenderIcon = (className: string) => (
  <ShareIcon className={className} />
);
const HeartRenderIcon = (className: string) => (
  <HeartIcon className={className} />
);
const CartRenderIcon = (className: string) => (
  <CartIcon className={className} />
);

const ProductMenu = ({
  code,
  rating,
  reviewsCount,
  className,
}: ProductMenuProps) => (
  <div className={cn(styles.menu, className)}>
    <div className={styles.menu_code}>арт.{code}</div>
    <div className={styles.menu_rating}>
      <Rating
        stars={5}
        rating={rating ? rating : 0}
        readonly={true}
        className={styles.menu_stars}
      />
      <span className={styles.menu_reviewsCount}>
        {reviewsCount > 0 ? reviewsCount + " отзыва" : "нет отзывов"}
      </span>
    </div>
    <Button
      accent="grayscale"
      decoration="no"
      renderLeftIcon={ShareRenderIcon}
      size="s"
      className={styles.menu_btn}
    >
      Поделиться
    </Button>
    <Button
      accent="grayscale"
      decoration="no"
      renderLeftIcon={HeartRenderIcon}
      size="s"
      className={styles.btn}
    >
      В избранное
    </Button>
  </div>
);

type ProductBodyProps = {
  title: IProduct["title"];
  image: IProduct["image"];
  discount?: IProduct["discount"];
  price: IProduct["price"];
  priceWithCard: IProduct["priceWithCard"];
  relatedProducts: IProduct["relatedProducts"];
  brand: IProductDescription["brand"];
  country: IProductDescription["country"];
  pack: IProductDescription["package"];
};

const ProductBody = ({
  title,
  image,
  discount,
  price,
  priceWithCard,
  brand,
  country,
  pack,
  relatedProducts,
}: ProductBodyProps) => {
  console.log(relatedProducts);
  return (
    <div className={styles.body}>
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
};

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
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        <Htag size="s">{product.title}</Htag>
        <ProductMenu
          code={product.code}
          rating={product.rating}
          reviewsCount={product.reviewsCount}
        />
        <ProductBody
          image={product.image}
          title={product.title}
          price={product.price}
          priceWithCard={product.priceWithCard}
          discount={product.discount}
          brand={product.description.brand}
          country={product.description.country}
          pack={product.description.package}
          relatedProducts={product.relatedProducts}
        />
      </Container>
    );
  }

  return null;
};
