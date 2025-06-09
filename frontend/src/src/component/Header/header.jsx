import styles from './header.module.scss';
import logoIbra from './img/logo.svg';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

const Header = ({
    modalOpen,
    modalClose,
    isModalOpen,
    aboutRef,
    experiencesRef,
    projectsRef,
    customersRef,
    footerRef

}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef(null);
    const burgerButtonRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                modalClose();
            }
        };

        const handleClickOutside = (event) => {
            if (isModalOpen && 
                !mobileMenuRef.current?.contains(event.target) && 
                !burgerButtonRef.current?.contains(event.target)) {
                modalClose();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen, modalClose]);

    const toggleMenu = () => {
        if (isModalOpen) {
            modalClose();
        } else {
            modalOpen();
        }
    };

    // const scrollToRef = (ref) => {
    //     if (ref && ref.current) {
    //         ref.current.scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         console.error("Ref is undefined or does not have a current property");
    //     }
    // }

    const scrollToref = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Ref is undefined or does not have a current property");
        }
    }

    const handleScroll = (ref) => {
        if (location.pathname === '/') {
            if (isModalOpen) {
                modalClose();
                setTimeout(() => {
                    scrollToref(ref)
                }, 300);
            } else {
                scrollToref(ref)
            }
        } else {
            navigate('/');
            setTimeout(() => {
                if (isModalOpen) {
                    modalClose();
                    setTimeout(() => {
                        scrollToref(ref)
                    }, 300);
                } else {
                    setTimeout(() => {
                        scrollToref(ref)
                    }, 300);
                }
            }, 400);
        }

    }

    
    return (
        // <div className={`${styles.containerHead} ${styles.mobileMenu_container}`}>
        //     <div className={`${styles.containerHead__content} ${styles.mobileMenu_content}`}>
        <div className={`${styles.containerHead} ${isModalOpen ? styles.mobileMenuOpen : ''} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.containerHead__content} ${isModalOpen ? styles.mobileMenuOpen : ''}`}>
                <Link className={styles.containerHead__content__imgsLogo} to='/'>
                    <img className={styles.containerHead__content__imgsLogo_img} src={logoIbra} alt="Логотип Иброхим" />
                </Link>

                {isMobile ? (
                    <>
                        <button 
                            ref={burgerButtonRef}
                            className={`${styles.burgerMenu} ${isModalOpen ? styles.open : ''}`}
                            onClick={toggleMenu}
                            aria-label="Меню"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                            <div 
                                ref={mobileMenuRef}
                                className={`${styles.mobileMenu} ${isModalOpen ? styles.open : ''}`}
                            >
                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(aboutRef)}
                                >
                                    Обо мне
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(experiencesRef)}
                                >
                                    Опыт работы
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(projectsRef)}
                                >
                                    Мои проекты
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(customersRef)}
                                >
                                    Клиенты
                                </button>

                                {/* <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={modalClose}
                                >
                                    Отзывы
                                </button> */}

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(footerRef)}
                                >
                                    Контакты
                                </button>
                            </div>
                    </>
                ) : ( 
                    <div className={styles.containerHead__content__buttons}>
                        <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(aboutRef)}
                                >
                                    Обо мне
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(experiencesRef)}
                                >
                                    Опыт работы
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(projectsRef)}
                                >
                                    Мои проекты
                                </button>

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(customersRef)}
                                >
                                    Клиенты
                                </button>

                                {/* <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={modalClose}
                                >
                                    Отзывы
                                </button> */}

                                <button 
                                    className={styles.containerHead__content__buttons_button}
                                    onClick={() => handleScroll(footerRef)}
                                >
                                    Контакты
                                </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;