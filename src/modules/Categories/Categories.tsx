import { Container } from "layouts";
import { Breadcrumbs, Htag } from "components";
import { BreadcrumbItem } from "types/componets-types";
import styles from "./Categories.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: "",
  },
];

const categoriesItems = [
  {
    id: 1,
    title: "Молоко, сыр яйцо",
    img: "",
  },
];

export const Categories = () => (
  <div>
    <Container>
      <Breadcrumbs items={breadcrumbItems} />
      <Htag size="xl">Каталог</Htag>
    </Container>
  </div>
);
