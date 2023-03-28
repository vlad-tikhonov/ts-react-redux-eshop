import { ProductsPanel } from "widgets";
import { usePromotions } from "store/promotions/features/use-promotions";

interface PromotionsProps {
  className?: string;
}

export const Promotions = ({ className }: PromotionsProps) => {
  const [promotions, { isLoading: pIsLoading, errors: pErrors }] =
    usePromotions();

  return (
    <ProductsPanel products={promotions} title="Акции" className={className} />
  );
};
