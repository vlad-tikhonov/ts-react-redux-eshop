import styles from "./about-company.module.sass";
import { BreadcrumbItem } from "types";
import { Breadcrumbs } from "widgets";
import { AboutBlock } from "./about-block/about-block";
import { DetailsBlock } from "./details-block/details-block";
import { ThankBlock } from "./thank-block/thank-block";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "О компании",
    to: "",
  },
];

export const AboutCompany = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <AboutBlock className={styles.about} />
      <DetailsBlock className={styles.details} />
      <ThankBlock />
    </>
  );
};
