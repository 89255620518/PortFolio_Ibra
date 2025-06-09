import styles from "./customers.module.scss";
import frantsuzClub from './images/image-1.png';
import shashlandia from './images/image-5.png';
import reiting from './images/image-11.png';
import frantsuzShop from './images/image-6.png';
import pominki from './images/image-7.png';
import comicadze from './images/image-2.png';
import wetop from './images/image-9.png';
import dalikhinkali from './images/footer-logo.png';
import academia from './images/image-12.png';
import pouvsegda from './images/pouvsegda.png';
import corpPitanie from './images/image-3.png';
import tyteda from './images/tyteda.png';
import { Link } from 'react-router-dom';

const customerArr = [
    {
        id: 1,
        link: "https://frantsuz-club.ru/",
        foto: frantsuzClub,
    },

    {
        id: 2,
        link: "https://corp-pitanie.tyteda.ru/",
        foto: corpPitanie,
    },

    {
        id: 3,
        link: "https://shashlandia.ru/",
        foto: shashlandia,
    },

    {
        id: 4,
        link: "http://frantsuz-shop.ru/",
        foto: frantsuzShop,
    },

    {
        id: 5,
        link: "https://poyuvsegda.ru/",
        foto: pouvsegda,
    },

    {
        id: 6,
        link: "https://comicadze.ru/",
        foto: comicadze,
    },

    {
        id: 7,
        link: "https://wetop.ru/",
        foto: wetop,
    },

    {
        id: 8,
        link: "https://tyteda.ru/",
        foto: tyteda,
    },

    {
        id: 9,
        link: "https://frantsuz.ru/",
        foto: academia,
    },

    {
        id: 10,
        link: "https://reiting.moscow/",
        foto: reiting,
    },

    {
        id: 11,
        link: "https://dostavka-pominki.ru/",
        foto: pominki,
    },

    {
        id: 12,
        link: "https://dali-khinkali.ru/",
        foto: dalikhinkali,
    },

]
const Customers = ({ customersRef }) => {
    return (
        <div ref={customersRef} className={styles.containerCustomers}>
            <h1 className={styles.title}>Мои клиенты</h1>
            <div className={styles.customersGrid}>
                {customerArr.map((customer) => (
                    <div key={customer.id} className={styles.customerCard}>
                        <a 
                            href={customer.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.customerLink}
                        >
                            <div className={styles.imageContainer}>
                                <img 
                                    src={customer.foto} 
                                    alt={`Логотип ${customer.link}`}
                                    className={styles.customerLogo}
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Customers;
