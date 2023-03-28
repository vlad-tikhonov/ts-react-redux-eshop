import { Button } from "ui";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as HeartFilledIcon } from "assets/icons/heart-filled.svg";
import { ProductWithReviewsInfo } from "types";
import {
  useFavoritesActions,
  useIsInFavorites,
} from "store/favorites/features";

const renderHearthIcon = (className: string) => (
  <HeartIcon className={className} />
);
const renderHearthFilledIcon = (className: string) => (
  <HeartFilledIcon className={className} />
);

interface FavoritesButtonProps {
  product: ProductWithReviewsInfo;
}

export const FavoritesButton = ({ product }: FavoritesButtonProps) => {
  const isInFavorites = useIsInFavorites(product?._id);

  const { add, remove } = useFavoritesActions();

  const handleAddToFavorites = () => {
    add(product);
  };

  const handleRemoveFromFavorites = () => {
    remove(product?._id);
  };

  return (
    <Button
      accent="grayscale"
      decoration="no"
      renderLeftIcon={isInFavorites ? renderHearthFilledIcon : renderHearthIcon}
      onClick={isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites}
      size="s"
    >
      {isInFavorites ? "В избранном" : "В избранное"}
    </Button>
  );
};
