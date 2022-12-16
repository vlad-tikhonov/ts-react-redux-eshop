import { Container } from "layouts";
import { Breadcrumbs } from "components";
import { BreadcrumbItem } from "types/componets-types";
import { RoutesNames } from "constants/routes-names";
import styles from "./Categories.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Каталог",
    to: RoutesNames.Categories,
  },
];

export const Categories = () => (
  <Container>
    <div>Categories page</div>
    <Breadcrumbs items={breadcrumbItems} />
  </Container>
);
