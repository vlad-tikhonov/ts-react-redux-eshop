import { BreadcrumbItem } from "types";
import { Breadcrumbs } from "widgets";
import { Htag } from "ui";
import styles from "./vacancies.module.sass";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Вакансии",
    to: "",
  },
];

const Vacancies = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <Htag size="xl" className={styles.title}>
        Вакансии
      </Htag>
      <p className={styles.paragraph}>Нет опубликованных вакансий</p>
    </>
  );
};

export default Vacancies;
