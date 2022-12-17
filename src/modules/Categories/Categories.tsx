import { Container } from "layouts";
import { Breadcrumbs } from "components";
import { BreadcrumbItem } from "types/componets-types";
import styles from "./Categories.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: "",
  },
];

export const Categories = () => (
  <Container>
    <Breadcrumbs items={breadcrumbItems} />
  </Container>
);
