// import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import styles from "./successAlert.module.css";
import confetti from 'canvas-confetti';

const SuccessAlert = ({ onClose }) => {

    useEffect(() => {
        // Запускаем конфетти при появлении компонента
        const duration = 3000; // Длительность анимации конфетти (3 секунды)
        
        const colors = ['#4CAF50', '#8BC34A', '#CDDC39']; // Зеленая цветовая гамма
        
        const interval = setInterval(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
        }, 200); // Новые порции конфетти каждые 200мс

        // Останавливаем через duration миллисекунд
        const timeout = setTimeout(() => {
            clearInterval(interval);
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

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