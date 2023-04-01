/* eslint-disable jsx-a11y/anchor-has-content */
import { Text } from "ui";
import { Container } from "layouts";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import styles from "./footer.module.sass";
import { setActiveClass } from "helpers/utils";

const menuItems = [
  {
    title: "О компании",
    to: "about",
  },
  {
    title: "Контакты",
    to: "contacts",
  },
  {
    title: "Вакансии",
    to: "vacancies",
  },
  {
    title: "Статьи",
    to: "articles",
  },
  {
    title: "Политика обработки персональных данных",
    to: "policy",
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

const setIsActive = setActiveClass(styles.text_active, styles.text);

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
              <NavLink to={item.to} className={setIsActive}>
                {item.title}
                {/* <span className={styles.text}>{item.title}</span> */}
              </NavLink>
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
