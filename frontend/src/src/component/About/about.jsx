import styles from './about.module.scss';
import { Link } from 'react-router-dom';

const About = ({ aboutRef }) => {
    
    return (
        <div ref={aboutRef} className={styles.containerAbout}>
            <div className={styles.containerAbout__content}>
                <div className={styles.containerAbout__content_text}>
                    <h1 className={styles.containerAbout__content__text_h1}>Обо мне</h1>
                </div>

                <div className={styles.containerAbout__content_info}>
                    <h2 className={styles.heroTitle}>🚀 Иброхим Эргешев | Fullstack Мастер Кода</h2>

                    <p className={styles.paragraph}>
                        Привет, мир! 👋 Я — <span className={styles.accent}>Иброхим</span>, но в мире байтов и компонентов меня можно встретить под ником <span className={styles.nickname}>"IBRA"</span> (или просто "<span className={styles.accent}>тот самый fullstack-чародей</span>").
                    </p>

                    <div className={styles.section}>
                        <h3 className={styles.subtitle}>🧑‍💻 Чем занимаюсь?</h3>
                        <p className={styles.paragraph}>
                            Создаю <span className={styles.bold}>быстрые, красивые и умные</span> веб-приложения, которые не просто работают, а <span className={styles.accent}>вдохновляют</span>. Мой стек — это <span className={styles.tech}>React</span>, <span className={styles.tech}>Next.js</span>, <span className={styles.tech}>Node.js</span>, а языки — <span className={styles.tech}>JS/TS</span> (и даже <span className={styles.tech}>CJS</span>, когда нужно).
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.subtitle}>🔥 Где творю?</h3>
                        <p className={styles.paragraph}>
                            Днём — <span className={styles.accent}>Fullstack-разработчик в Wetop</span>, ночью — <span className={styles.accent}>фриланс-маг</span>, превращающий идеи в код.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.subtitle}>💡 Моя философия:</h3>
                        <blockquote className={styles.quote}>
                            "Код — это не просто строчки, а кирпичики цифровых вселенных. И я строю их с душой."
                        </blockquote>
                    </div>
                    <p className={styles.cta}>
                        Хочешь крутой сайт, мощное API или просто обсудить технологии? <span className={styles.highlight}>Давай работать!</span> ✨
                    </p>
                </div>

                <div className={styles.resumeWrapper}>
                    <Link 
                        href="./rezume/resume.pdf" // Make sure this path is correct
                        download="Ergeshev_Ibrokhim_Fullstack_Resume.pdf"
                        className={styles.resumeButton}
                        aria-label="Скачать резюме"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.resumeIcon}>📄</span>
                        <span className={styles.resumeText}>Хочешь узнать меня формально?</span>
                        <span className={styles.resumeAction}>Вот мое резюме</span>
                        <span className={styles.resumeHoverEffect} aria-hidden="true"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;