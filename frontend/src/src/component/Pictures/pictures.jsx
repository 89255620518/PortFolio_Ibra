import styles from "./pictures.module.scss";
import fotoIbra from "./img/ibra.png";
import fotoFon from "./img/font.png";

const PicturesComponent = () => {

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
                        <button className={styles.containerPictures__content__forms_form_button}>Оставьте заявку</button>
                    </div>
                </div>

                <div className={styles.containerPictures__content__imgs}>
                    <img className={styles.containerPictures__content__imgs_img} src={fotoIbra} alt="Иброхим" />
                </div>
            </div>
        </div>
    )
}

export default PicturesComponent;