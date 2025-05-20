import styles from "./pictures.module.scss";
import fotoIbra from "./img/ibra.png";
import fotoFon from "./img/font.png";
import ModalComponent from "../modalCompanent/modalCompanent";
import { useState } from "react";

const PicturesComponent = ({ homeRef }) => {
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
        <div className={styles.containerPictures}>
            <img className={styles.containerPictures_img} src={fotoFon} alt="Эргешев" />
            <div className={styles.containerPictures__content}>
                <div className={styles.containerPictures__content__forms}>
                    <div className={styles.containerPictures__content__forms_texts}>
                        <p className={styles.containerPictures__content__forms_texts_text}>
                            Привет, меня зовут
                            <span className={styles.containerPictures__content__forms_texts_text_span}>Эргешев Иброхим</span> 
                            <span>Fullstack-разработчик — когда нужно и кнопку нарисовать, и сервер масштабировать.</span>
                        </p>
                    </div>

                    <div className={styles.containerPictures__content__forms_form}>
                        <button onClick={() => openModal()} className={styles.containerPictures__content__forms_form_button}>Оставьте заявку</button>
                    </div>
                </div>

                <div className={styles.containerPictures__content__imgs}>
                    <img className={styles.containerPictures__content__imgs_img} src={fotoIbra} alt="Иброхим" />
                </div>
            </div>

            {isOpenModal && <ModalComponent modalClose={closeModal} />}
        </div>
    )
}

export default PicturesComponent;