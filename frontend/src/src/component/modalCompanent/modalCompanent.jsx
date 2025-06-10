import { useState } from 'react';
import styles from "./modal.module.scss";
import SuccessAlert from '../successAlert/successAlert';
import ErrorAlert from '../successAlert/errorAlert/errorAlert'
import AppService from '../../api/apiService';


const ModalComponent = ({ modalClose }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        phone_number: '',
        comments: '',
        privacy_policy_checked: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            modalClose();
        }
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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

        if (!formData.first_name.trim()) {
            newErrors.first_name = 'Пожалуйста, введите ваше имя';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Пожалуйста, введите ваш email';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Пожалуйста, введите корректный email';
            isValid = false;
        }

        if (!formData.phone_number.trim()) {
            newErrors.phone_number = 'Пожалуйста, введите ваш телефон';
            isValid = false;
        }

        if (!formData.privacy_policy_checked) {
            newErrors.privacy_policy_checked = 'Необходимо принять политику конфиденциальности';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitError('');
    
        if (validate()) {
            try {
                await AppService.createApplication({
                    ...formData,
                    privacy_policy_checked: true
                });
                setIsLoading(false);
                setIsSubmitted(true);

                // Очистка формы через 3 секунды
                setTimeout(() => {
                    setFormData({
                        first_name: "",
                        email: "",
                        phone_number: "",
                        comments: "",
                        privacy_policy_checked: false
                    });
                    setIsSubmitted(false);
                    modalClose();
                }, 3000);
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                setIsLoading(false);
                // Check if this is the duplicate email error
                let errorMessage = 'Заявка с такой электронной почтой уже была отправлена. Укажите другую электронную почту.';
                if (error.message.includes('Заявка с такой электронной почтой')) {
                    errorMessage = 'Заявка с такой электронной почтой уже была отправлена. Укажите другую электронную почту.';
                    setErrors(prev => ({
                        ...prev,
                        email: 'Укажите другую электронную почту'
                    }));
                }

                setSubmitError(errorMessage);
                setShowErrorAlert(true); 

                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 5000);
            }
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

    if (showErrorAlert) {
        return (
            <div className={styles.modalOverlay} onClick={() => setShowErrorAlert(false)}>
                <div className={styles.modalContent} onClick={handleContentClick}>
                    <ErrorAlert 
                        message={submitError} 
                        onClose={() => setShowErrorAlert(false)} 
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={handleContentClick}>
                <button className={styles.closeButton} onClick={modalClose}>×</button>
                <h2 className={styles.modalTitle}>Оставьте заявку</h2>
                
                {submitError && (
                    <div className={styles.submitError}>
                        {submitError}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="first_name">Имя</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className={errors.first_name ? styles.errorInput : ''}
                        />
                        {errors.first_name && (
                            <span className={styles.errorText}>{errors.first_name}</span>
                        )}
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
                        {errors.email && (
                            <span className={styles.errorText}>{errors.email}</span>
                        )}
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="phone_number">Телефон</label>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className={errors.phone_number ? styles.errorInput : ''}
                        />
                        {errors.phone_number && (
                            <span className={styles.errorText}>{errors.phone_number}</span>
                        )}
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="comments">Сообщение</label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={styles.checkboxGroup}>
                        <div>
                            <input
                                type="checkbox"
                                id="privacy_policy_checked"
                                name="privacy_policy_checked"
                                checked={formData.privacy_policy_checked}
                                onChange={handleChange}
                            />
                            <label htmlFor="privacy_policy_checked">
                                Я согласен с политикой конфиденциальности
                            </label>
                        </div>
                        {errors.privacy_policy_checked && (
                            <span className={styles.errorText}>{errors.privacy_policy_checked}</span>
                        )}
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