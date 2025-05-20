import { useState } from 'react';
import styles from "./modal.module.scss";
import SuccessAlert from '../successAlert/successAlert';

const ModalComponent = ({ modalClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [agree, setAgree] = useState(false);
    const [agreeError, setAgreeError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            modalClose();
        }
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, введите ваше имя';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Пожалуйста, введите ваш email';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Пожалуйста, введите корректный email';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите ваш телефон';
            isValid = false;
        }

        if (!agree) {
            setAgreeError('Необходимо согласие с политикой конфиденциальности');
            isValid = false;
        } else {
            setAgreeError('');
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        if (validate()) {
            // Имитация отправки данных
            console.log(formData, 'form');
            
            setIsLoading(false);
            setIsSubmitted(true);
            
            // Очистка формы через 3 секунды
            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setIsSubmitted(false);
                modalClose();
            }, 3000);
        } else {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                <div className={styles.modalContent} onClick={handleContentClick}>
                    <SuccessAlert onClose={modalClose} />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={handleContentClick}>
                <button className={styles.closeButton} onClick={modalClose}>×</button>
                <h2 className={styles.modalTitle}>Оставьте заявку</h2>
                
                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? styles.errorInput : ''}
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.errorInput : ''}
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? styles.errorInput : ''}
                        />
                        {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={styles.checkboxGroup}>
                        <div>
                            <input
                                type="checkbox"
                                id="agree"
                                checked={agree}
                                onChange={(e) => {
                                    setAgree(e.target.checked);
                                    if (agreeError && e.target.checked) {
                                        setAgreeError('');
                                    }
                                }}
                            />
                            <label htmlFor="agree">
                                Я согласен с политикой конфиденциальности
                            </label>
                        </div>
                        {agreeError && <span className={styles.errorText}>{agreeError}</span>}
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalComponent;