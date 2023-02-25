import React from "react";
import styles from "./Footer.module.scss";
import { IconFacebook, IconInstagram, IconMail, IconTelegram, IconTwitter, IconVK } from "./icons/icons";

function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.top}>
        <p className={styles.quote}>Образование и научные достижения — ключ к успеху.</p>

        <div className={styles.col}>
            <p className={styles.colTitle}>О библиотеке</p>
            <ul className={styles.links}>
                <li><a className={styles.link} href="/">Фонд</a></li>
                <li><a className={styles.link} href="/">Базы данных</a></li>
                <li><a className={styles.link} href="/">Онлайн-услуги</a></li>
                <li><a className={styles.link} href="/">Отзывы</a></li>
            </ul>
        </div>

        <div className={styles.col}>
            <p className={styles.colTitle}>О системе поиска</p>
            <ul className={styles.links}>
                <li><a className={styles.link} href="/">Поиск</a></li>
                <li><a className={styles.link} href="/">Аналитика</a></li>
                <li><a className={styles.link} href="/">Авторские права</a></li>
                <li><a className={styles.link} href="/">Конфиденциальность</a></li>
                <li><a className={styles.link} href="/">Контакты</a></li>
            </ul>
        </div>

        <div className={styles.col}>
            <p className={styles.colTitle}>Лаборатория научных коммуникаций</p>
            <ul className={styles.links}>
                <li><a className={styles.link} href="/">Сопровождение публикационной активности</a></li>
                <li><a className={styles.link} href="/">Дайджест InfoGeneratorх</a></li>
                <li><a className={styles.link} href="/">Контакты</a></li>
            </ul>
        </div>
    </div>
    <div className={styles.social}>
        <ul className={styles.socialLinks}>
            <li><a className={styles.socialLink} href='/'><IconFacebook /></a></li>
            <li><a className={styles.socialLink} href='/'><IconTelegram /></a></li>
            <li><a className={styles.socialLink} href='/'><IconTwitter /></a></li>
            <li><a className={styles.socialLink} href='/'><IconMail /></a></li>
            <li><a className={styles.socialLink} href='/'><IconInstagram /></a></li>
            <li><a className={styles.socialLink} href='/'><IconVK /></a></li>
        </ul>
    </div>
  </footer>;
}

export default Footer;
