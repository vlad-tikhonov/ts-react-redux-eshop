import { BreadcrumbItem } from "types";
import { Breadcrumbs, StoresMap } from "widgets";
import { Htag } from "ui";
import styles from "./contacts.module.sass";
import { ContactsBlock } from "./contacts-block/contacts-block";

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: "Контакты",
    to: "",
  },
];

const Contacts = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <Htag size="xl" className={styles.title}>
        Контакты
      </Htag>
      <ContactsBlock className={styles.contacts} />
      <StoresMap />
    </>
  );
};

export default Contacts;
