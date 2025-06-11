import { useState, useEffect } from 'react';
import styles from './about.module.scss';

const About = ({ aboutRef }) => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Очистка объекта URL при размонтировании
        return () => {
        if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, [pdfUrl]);

    const handleOpenResume = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
        if (!pdfUrl) {
            const response = await fetch('/ibra.pdf');
            if (!response.ok) throw new Error('Ошибка загрузки PDF');
            const blob = await response.blob();
            setPdfUrl(URL.createObjectURL(blob));
        }
        setIsResumeOpen(true);
        } catch (err) {
        setError(err.message);
        console.error('Ошибка загрузки PDF:', err);
        } finally {
        setIsLoading(false);
        }
    };

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
            <button 
                onClick={handleOpenResume}
                className={styles.resumeButton}
                disabled={isLoading}
                aria-label={isLoading ? "Загрузка резюме..." : "Посмотреть резюме"}
            >
                {isLoading ? (
                <span className={styles.resumeLoader} />
                ) : (
                <>
                    <span className={styles.resumeIcon}>📄</span>
                    <span className={styles.resumeText}>
                    {error ? "Ошибка загрузки" : "Хочешь узнать меня формально?"}
                    </span>
                    <span className={styles.resumeAction}>
                    {error ? "Попробовать снова" : "🖱️ Кликни для просмотра"}
                    </span>
                    <span className={styles.resumeHoverEffect} aria-hidden="true"></span>
                </>
                )}
            </button>
            {error && (
                <div className={styles.errorTooltip}>
                Не удалось загрузить резюме. Попробуйте позже.
                </div>
            )}
            </div>
        </div>

        {/* Модальное окно для PDF */}
        {/* {isResumeOpen && (
            <div className={styles.modalOverlay} onClick={() => setIsResumeOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button 
                className={styles.closeButton}
                onClick={() => setIsResumeOpen(false)}
                aria-label="Закрыть"
                >
                &times;
                </button>
                
                {pdfUrl ? (
                <iframe 
                    src={`${pdfUrl}#view=fitH`}
                    className={styles.pdfIframe}
                    title="Резюме Иброхима Эргешева"
                    allow="autoplay"
                />
                ) : (
                <div className={styles.pdfLoader}>
                    {isLoading ? "Загрузка..." : "PDF не доступен"}
                </div>
                )}
            </div>
            </div>
        )} */}
        {isResumeOpen && (
            <div className={styles.modalOverlay} onClick={() => setIsResumeOpen(false)}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button 
                    className={styles.closeButton}
                    onClick={() => setIsResumeOpen(false)}
                    aria-label="Закрыть"
                >
                    &times;
                </button>
                
                {pdfUrl ? (
                    <div className={styles.pdfContainer}>
                    <iframe 
                        src={`${pdfUrl}#view=fitH`}
                        className={styles.pdfIframe}
                        title="Резюме Иброхима Эргешева"
                        allow="autoplay"
                        loading="lazy"
                    />
                    <div className={styles.pdfControls}>
                        <a 
                        href={pdfUrl} 
                        download="Резюме_Иброхим_Эргешев.pdf"
                        className={styles.downloadButton}
                        >
                        📥 Скачать резюме
                        </a>
                    </div>
                    </div>
                ) : (
                    <div className={styles.pdfLoader}>
                    {isLoading ? (
                        <div className={styles.loaderAnimation}>
                        <div className={styles.spinner}></div>
                        Загрузка резюме...
                        </div>
                    ) : (
                        "PDF не доступен"
                    )}
                    </div>
                )}
                </div>
            </div>
            )}

        
        </div>
    );
};

export default About;