import styles from "./footer.module.scss";
import { Link } from 'react-router-dom';
import telegramIcon from './img/icons8-телеграм.svg';
import vkIcon from './img/icons8-vk.svg';
import whatsappIcon from './img/icons8-whatsapp.svg';
import phoneIcon from './img/icons8-телефон.svg';
import ModalComponent from "../modalCompanent/modalCompanent";
import { useState } from "react";

const Footer = ({ homeRef }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    
    const openModal = () => {
        document.body.classList.add('no-scroll');
        homeRef.current.style.zIndex = "11";
        setIsOpenModal(true)
    }
    
    const closeModal = () => {
        document.body.classList.remove('no-scroll');
        homeRef.current.style.zIndex = "3";
        setIsOpenModal(false);
    }
    return (
        <div className={styles.containerFooter}>
            <div className={styles.containerFooter__span1}></div>
            <div className={styles.containerFooter__content}>
                <div className={styles.containerFooter__content__links}>
                    <div className={styles.containerFooter__content__links_info}>
                        <h1 className={styles.containerFooter__content__links_info_h1}>Нужен веб-разработчик из Москвы? Давайте что-нибудь создадим.</h1>
                        <button className={styles.containerFooter__content__links_info_button} onClick={() => openModal()} >Оставьте заявку</button>
                    </div>

                    <div className={styles.containerFooter__content__links_link}>
                        {/* ВКонтакте - официальный логотип */}
                        <Link to="https://vk.com/3ekaruliit" target="_blank" rel="noopener noreferrer" className={styles.containerFooter__content__links_link_button}>
                            <span className={styles.containerFooter__content__links_link_button_span} >+</span>
                            <img src={vkIcon} alt="Вконтакте Иброхим" />
                        </Link>
                        
                        {/* Telegram - официальный логотип */}
                        <Link to="https://t.me/ibrokhim_developer" target="_blank" rel="noopener noreferrer" className={styles.containerFooter__content__links_link_button}>
                            <span className={styles.containerFooter__content__links_link_button_span} >+</span>
                            <img src={telegramIcon} alt="Телеграм Иброхим" />
                        </Link>
                        
                        {/* WhatsApp */}
                        <Link to="https://wa.me/79932827031" target="_blank" rel="noopener noreferrer" className={styles.containerFooter__content__links_link_button}>
                            <span className={styles.containerFooter__content__links_link_button_span} >+</span>
                            <img src={whatsappIcon} alt="Телеграм Иброхим" />
                        </Link>
                        
                        {/* Телефон */}
                        <Link to="tel:+79932827031" className={styles.containerFooter__content__links_link_button}>
                            <span className={styles.containerFooter__content__links_link_button_span} >+</span>
                            <img src={phoneIcon} alt="Телеграм Иброхим" />
                        </Link>
                    </div>
                </div>

                <div className={styles.containerFooter__content__copyright}>
                    <h1 className={styles.containerFooter__content__copyright_h1}>© Все права защищены</h1>

                    <h1 className={styles.containerFooter__content__copyright_h1}>© Copyright 2025 − Эргешев Иброхим</h1>

                    <Link to="/policy">
                        <button className={styles.containerFooter__content__copyright_h1}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button>
                    </Link>
                </div>
            </div>
            <div className={styles.containerFooter__span2}></div>

            {isOpenModal && <ModalComponent modalClose={closeModal} />}
        </div>
    )
}

export default Footer;