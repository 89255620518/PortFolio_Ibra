// components/errorAlert/ErrorAlert.jsx
import { FaTimesCircle } from 'react-icons/fa';
import styles from "./errorAlert.module.css";

const ErrorAlert = ({ message, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.errorAlert} onClick={e => e.stopPropagation()}>
                <div className={styles.errorIconContainer}>
                    <FaTimesCircle className={styles.errorIcon} />
                    <div className={styles.circlePulse}></div>
                </div>
                
                <h3 className={styles.errorTitle}>Ошибка!</h3>
                <p className={styles.errorMessage}>{message}</p>
                
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorAlert;