import styles from './RecentProjects.module.scss';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Дали-Хинкали",
        aboutCompany: "Дали-Хинкали – кафе грузинской кухни с летней верандой",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "🍽️ Онлайн-бронирование столов с выбором даты, времени и указанием особых пожеланий",
            "🚕 Интеграция с сервисами такси для удобного возвращения домой",
            "💳 Полноценная система онлайн-платежей с поддержкой карт",
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: хинкальный калькулятор, фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "🛋️",
                title: "Бронирование столиков",
                details: "Интуитивная система бронирования с подтверждением по SMS/email"
            },
            {
                icon: "🚖",
                title: "Вызов такси",
                details: "Вызов прямо из сайта"
            },
            {
                icon: "💸",
                title: "Оплата онлайн",
                details: "Безопасные платежи через PayKeeper"
            },
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: React + JavaScript + CSS",
            "Backend: Python + Django",
            "Базы данных: PostgreSQL",
            "Платежи: PayKeeper API",
        ],
        button: "https://dali-khinkali.ru/",
        background: "",
    },

    {
        id: 2,
        title: "QR-menu Дали-Хинкали",
        aboutCompany: "QR-menu – кафе грузинской кухни с летней верандой",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: хинкальный калькулятор, фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: React + JavaScript + CSS",
            "Backend: Python + Django",
            "Базы данных: PostgreSQL",
        ],
        button: "https://dh-menu.ru/",
        background: "",
    },

    {
        id: 3,
        title: "Тут-Еда",
        aboutCompany: "Тут-Еда – компания по доставке готовой еды",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "💳 Полноценная система онлайн-платежей с поддержкой карт",
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: калькулятор, фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "💸",
                title: "Оплата онлайн",
                details: "Безопасные платежи через PayKeeper"
            },
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: React + JavaScript + CSS",
            "Backend: Python + Django",
            "Базы данных: PostgreSQL",
            "Платежи: PayKeeper API",
        ],
        button: "https://tyteda.ru/",
        background: "",
    },

    {
        id: 4,
        title: "Доставка-Поминки",
        aboutCompany: "Доставка-Поминки – забота о ваших близких в трудные времена",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "💳 Полноценная система онлайн-платежей с поддержкой карт",
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: калькулятор, фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "💸",
                title: "Оплата онлайн",
                details: "Безопасные платежи через PayKeeper"
            },
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: Next + JavaScript + SCSS",
            "Backend: Node.js + Express",
            "Базы данных: PostgreSQL",
            "Платежи: PayKeeper API",
        ],
        button: "https://dostavka-pominki.ru/",
        background: "",
    },

    {
        id: 5,
        title: "Шашландия",
        aboutCompany: "Шашландия – это лидер среди сервисов организации Ваших пикников!",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "💳 Полноценная система онлайн-платежей с поддержкой карт",
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: калькулятор, фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "💸",
                title: "Оплата онлайн",
                details: "Безопасные платежи через PayKeeper"
            },
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: Next + TypeScript + SCSS",
            "Backend: Node.js + Express",
            "Базы данных: PostgreSQL",
            "Платежи: PayKeeper API",
        ],
        button: "https://shashlandia.ru/",
        background: "",
    },

    {
        id: 6,
        title: "Портфолио Эргешева Элёра",
        aboutCompany: "Эргешева Элёра – сертифицированный специалист по подбору и покупке недвижимости в Москве и МО.",
        functionKey: "🔹 Ключевые функции сайта:",
        description: [
            "💳 Полноценная система просмотра квартир с планировкой",
            "📱 Адаптивный дизайн, идеально работающий на всех устройствах",
            "🎉 Дополнительные фишки: фото-галерея, система лояльности"
        ],
        features: [
            {
                icon: "📱",
                title: "Мобильный дизайн",
                details: "Идеальное отображение на смартфонах с ускоренной загрузкой"
            }
        ],
        technologies: [
            "Frontend: React + JavaScript + CSS",
            "Backend: Python + Django",
            "Базы данных: PostgreSQL",
        ],
        button: "https://ergeshevarealty.ru/",
        background: "",
    },

]

const cardVariants = {
    offscreen: {
        y: 100,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const RecentProjects = () => {
    const backgroundColors = [
        'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        'linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)',
        'linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)',
        'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    ];

    return (
        <div className={styles.containerRecent}>
            <h2 className={styles.containerRecent__h1}>Мои последние проекты</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ background: backgroundColors[index % backgroundColors.length] }}
                    >
                        <div className={styles.cardContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.companyAbout}>{project.aboutCompany}</p>
                            
                            <div className={styles.section}>
                                <h4 className={styles.sectionTitle}>{project.functionKey}</h4>
                                <ul className={styles.descriptionList}>
                                    {project.description.map((item, i) => (
                                        <li key={i} className={styles.descriptionItem}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className={styles.featuresGrid}>
                                {project.features.map((feature, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <div className={styles.featureIcon}>{feature.icon}</div>
                                        <h5 className={styles.featureTitle}>{feature.title}</h5>
                                        <p className={styles.featureDetails}>{feature.details}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className={styles.technologies}>
                                <h4 className={styles.techTitle}>Использованные технологии:</h4>
                                <ul className={styles.techList}>
                                    {project.technologies.map((tech, i) => (
                                        <li key={i} className={styles.techItem}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <a 
                                href={project.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.projectButton}
                            >
                                Посмотреть проект
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;