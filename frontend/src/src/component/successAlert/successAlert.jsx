// import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from "./successAlert.module.css";

const SuccessAlert = ({ onClose }) => {
    // const [progress, setProgress] = useState(100);

    // useEffect(() => {
    //     // Анимация прогрессбара (3 секунды)
    //     const interval = setInterval(() => {
    //     setProgress(prev => Math.max(prev - 1, 0));
    //     }, 30);

    //     // Автозакрытие через 3 секунды
    //     const timer = setTimeout(() => {
    //     onClose();
    //     }, 3000);

    //     return () => {
    //     clearInterval(interval);
    //     clearTimeout(timer);
    //     };
    // }, [onClose]);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.successAlert} onClick={e => e.stopPropagation()}>
            <div className={styles.successIconContainer}>
            <FaCheckCircle className={styles.successIcon} />
            <div className={styles.circlePulse}></div>
            </div>
            
            <h3 className={styles.successTitle}>Спасибо за заявку!</h3>
            <p className={styles.successMessage}>Мы свяжемся с вами в ближайшее время</p>
            
            <div className={styles.progressBarContainer}>
            <div 
                className={styles.progressBar} 
                // style={{ width: `${progress}%` }}
            ></div>
            </div>
        </div>
        </div>
    );
};

export default SuccessAlert