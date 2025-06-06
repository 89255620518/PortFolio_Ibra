import { useEffect, useState } from 'react';
import styles from './experience.module.scss';

const experiences = [
        {
        id: 1,
        company: "GeekBrains",
        type: "Обучение",
        period: "2020 - 2022",
        role: "Разработчик учебных материалов",
        description: [
            "1 год разработки материалов по фронтенд-разработке",
            "1 год разработки материалов по фуллстек-разработке"
        ],
        aboutCompany: "Образовательная платформа, на которой можно с нуля освоить востребованную профессию, а также получить знания и навыки для перехода на новый уровень в карьере."
        },
        {
        id: 2,
        company: "WeTop",
        type: "Работа",
        period: "2023 - настоящее время",
        role: "Fullstack Developer",
        description: [
            "Решаем задачи бизнеса с использованием передовых интернет-технологий",
            "Комплексный подход к решению задач клиентов",
            "Соблюдение высоких стандартов качества"
        ],
        aboutCompany: "Компания Wetop основана в январе 2021 года и в нашей команде уже более 20 специалистов."
        }
    ];

const Experience = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth > 600 ? false : true);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.containerExperience}>
            <h1 className={styles.containerExperience__h1}>Опыт работы</h1>
            <div className={styles.containerExperience__content}>
                {isMobile ? (
                    <div className={styles.carousel}>
                        <div className={styles.carousel__buttons}>
                            <button 
                                className={styles.carousel__button} 
                                onClick={prevSlide}
                                aria-label="Previous experience"
                            >
                                &lt;
                            </button>

                            <button 
                                className={styles.carousel__button} 
                                onClick={nextSlide}
                                aria-label="Next experience"
                            >
                                &gt;
                            </button>
                        </div>

                        <div className={styles.carousel__slide}>
                            <div className={styles.slide__header}>
                                <div className={styles.company__badge}>
                                    <h3 className={styles.slide__company}>{experiences[currentSlide].company}</h3>
                                    <span className={styles.slide__type}>{experiences[currentSlide].type}</span>
                                </div>
                                
                                <div className={styles.slide__info}>
                                    <p className={styles.slide__period}>{experiences[currentSlide].period}</p>
                                    <p className={styles.slide__role}>{experiences[currentSlide].role}</p>
                                </div>
                            </div>

                            <div className={styles.slide__content}>
                                <ul className={styles.slide__description}>
                                    {experiences[currentSlide].description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                {experiences[currentSlide].aboutCompany && (
                                    <div className={styles.slide__about}>
                                    <h4>О компании:</h4>
                                    <p>{experiences[currentSlide].aboutCompany}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.carousel}>
                        <button 
                            className={styles.carousel__button} 
                            onClick={prevSlide}
                            aria-label="Previous experience"
                        >
                            &lt;
                        </button>

                        <div className={styles.carousel__slide}>
                            <div className={styles.slide__header}>
                                <div className={styles.company__badge}>
                                    <h3 className={styles.slide__company}>{experiences[currentSlide].company}</h3>
                                    <span className={styles.slide__type}>{experiences[currentSlide].type}</span>
                                </div>
                                
                                <div className={styles.slide__info}>
                                    <p className={styles.slide__period}>{experiences[currentSlide].period}</p>
                                    <p className={styles.slide__role}>{experiences[currentSlide].role}</p>
                                </div>
                            </div>

                            <div className={styles.slide__content}>
                                <ul className={styles.slide__description}>
                                    {experiences[currentSlide].description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                {experiences[currentSlide].aboutCompany && (
                                    <div className={styles.slide__about}>
                                    <h4>О компании:</h4>
                                    <p>{experiences[currentSlide].aboutCompany}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            className={styles.carousel__button} 
                            onClick={nextSlide}
                            aria-label="Next experience"
                        >
                            &gt;
                        </button>
                    </div>
                )}

                <div className={styles.carousel__pagination}>
                {experiences.map((_, index) => (
                    <button
                    key={index}
                    className={`${styles.pagination__dot} ${currentSlide === index ? styles.active : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to experience ${index + 1}`}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;