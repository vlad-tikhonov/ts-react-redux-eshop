import { ProductsPanel } from "widgets";
import { useNovelties } from "store/novelties/features";

interface NoveltiesProps {
  className?: string;
}

export const Novelties = ({ className }: NoveltiesProps) => {
  const [novelties, { isLoading: nIsLoading, errors: nErrors }] =
    useNovelties();

  return (
    <ProductsPanel products={novelties} title="Новинки" className={className} />
  );
};
