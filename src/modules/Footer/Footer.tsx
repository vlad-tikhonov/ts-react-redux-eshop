/* eslint-disable jsx-a11y/anchor-has-content */
import { Text } from "components";
import { Container } from "layouts";
import { Link } from "react-router-dom";
import cn from "classnames";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import styles from "./Footer.module.sass";

const menuItems = [
  {
    title: "О компании",
    to: "",
  },
  {
    title: "Контакты",
    to: "",
  },
  {
    title: "Вакансии",
    to: "",
  },
  {
    title: "Статьи",
    to: "",
  },
  {
    title: "Политика обработки персональных данных",
    to: "",
  },
];

const socialsItems = [
  {
    href: "https://rkn.gov.ru/",
    className: cn(styles.socials_item, styles.inst),
    title: "[РОСКОМНАДЗОР]",
  },
  {
    href: "https://www.vk.com/",
    className: cn(styles.socials_item, styles.vk),
    title: "Vk",
  },
  {
    href: "https://rkn.gov.ru/",
    className: cn(styles.socials_item, styles.facebook),
    title: "[РОСКОМНАДЗОР]",
  },
  {
    href: "https://rkn.gov.ru/",
    className: cn(styles.socials_item, styles.ok),
    title: "Одноклассники",
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to={"/"} className={styles.link}></Link>
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li className={styles.menu_item} key={item.title}>
              <Text size="xs">{item.title}</Text>
            </li>
          ))}
        </ul>
        <div className={styles.socials}>
          {socialsItems.map((item, i) => (
            <div className={item.className} key={i}>
              <a
                href={item.href}
                target="_blank"
                className={styles.link}
                rel="noopener noreferrer"
                title={item.title}
              ></a>
            </div>
          ))}
        </div>
        <div className={styles.contacts}>
          <PhoneIcon className={styles.contacts_icon} />
          <Text size="s">8 800 777 33 33</Text>
          <a href="callto:88007773333" className={styles.contacts_link}>
            {""}
          </a>
        </div>
      </div>
    </Container>
  </footer>
);
