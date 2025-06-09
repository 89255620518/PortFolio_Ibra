import { useState } from 'react';
import styles from './guide.module.scss';
import emailIcon from './img/icons8-cообщение-облачко.svg';
import AppService from '../../api/apiService';

const Guide = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [showEmojis, setShowEmojis] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { text: 'Привет! Чем могу помочь?', isBot: true }
    ]);
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        phone_number: '',
        comments: '',
        privacy_policy_checked: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', 
        '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
        '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
        '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
        '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
        '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗',
        '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯',
        '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐',
        '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈',
        '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾',
        '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿',
        '😾', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤏', '✌️', '🤞',
        '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍',
        '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝',
        '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂',
        '🦻', '👃', '🧠', '🦷', '🦴', '👀', '👁️', '👅', '👄', '👶',
        '🧒', '👦', '👧', '🧑', '👨', '👩', '🧔', '🧓', '👴', '👵',
        '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🧏', '🙇', '🤦', '🤷',
        '👮', '🕵️', '💂', '🥷', '👷', '🤴', '👸', '👳', '👲', '🧕',
        '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🧙', '🧚', '🧛', '🧜',
        '🧝', '🧞', '🧟', '💆', '💇', '🚶', '🧍', '🧎', '🏃', '💃',
        '🕺', '🕴️', '👯', '🧖', '🧗', '🤺', '🏇', '⛷️', '🏂', '🏌️',
        '🏄', '🚣', '🏊', '⛹️', '🏋️', '🚴', '🚵', '🤸', '🤼', '🤽',
        '🤾', '🤹', '🧘', '🛀', '🛌', '👭', '👫', '👬', '💏', '💑',
        '👪', '🗣️', '👤', '👥', '🫂', '👣', '🦰', '🦱', '🦳', '🦲'
    ];

    const modalOpen = () => setIsModalOpen(true);
    const modalClose = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setChatMessages([{ text: 'Привет! Чем могу помочь?', isBot: true }]);
    };

    const addEmoji = (emoji) => {
        setMessage(prev => prev + emoji);
    };

    const toggleEmojis = () => {
        setShowEmojis(!showEmojis);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;

        const newMessages = [...chatMessages, { text: message, isBot: false }];
        setChatMessages(newMessages);
        setMessage('');

        setTimeout(() => {
            setChatMessages([
                ...newMessages,
                {
                    text: 'Сейчас я не в сети. Пожалуйста, оставьте свои данные и мы свяжемся с вами.',
                    isBot: true,
                    showForm: true
                }
            ]);
        }, 1000);
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.first_name.trim()) newErrors.first_name = 'Введите имя';
        if (!formData.email.trim()) newErrors.email = 'Введите email';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Некорректный email';
        if (!formData.phone_number.trim()) newErrors.phone_number = 'Введите телефон';
        if (!formData.comments.trim()) newErrors.comments = 'Введите комментарии';
        if (!formData.privacy_policy_checked) newErrors.privacy_policy_checked = 'Необходимо согласие';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const firstUserMessage = chatMessages.find(msg => !msg.isBot)?.text || '';
                const combinedComments = `Сообщение из чата: ${firstUserMessage}\nДополнительно: ${formData.comments}`;

                await AppService.createApplication({
                    ...formData,
                    comments: combinedComments,
                    privacy_policy_checked: true
                });
                setIsSubmitted(true);

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
                }, 3500);
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                setErrors({ submit: 'Ошибка при отправке формы' });
            }
        }
    };

    return (
        <div className={styles.containerGuide}>
            {isModalOpen ? (
                <div className={styles.modalOverlay} onClick={modalClose}>
                    <div className={styles.chatContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.chatHeader}>
                            <h3>Чат с поддержкой</h3>
                            <button className={styles.closeButton} onClick={modalClose}>
                                &times;
                            </button>
                        </div>
                        
                        <div className={styles.chatMessages}>
                            {chatMessages.map((msg, index) => (
                                <div 
                                    key={index} 
                                    className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
                                >
                                    {msg.text}
                                    {msg.showForm && !isSubmitted && (
                                        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="Ваше имя"
                                                    value={formData.first_name}
                                                    onChange={handleFormChange}
                                                    className={`${styles.contactForm_input} ${errors.first_name ? styles.error : ''}`}
                                                />
                                                {errors.first_name && <span className={styles.errorText}>{errors.first_name}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Ваш email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={`${styles.contactForm_input} ${errors.email ? styles.error : ''}`}
                                                />
                                                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <input
                                                    type="tel"
                                                    name="phone_number"
                                                    placeholder="Ваш телефон"
                                                    value={formData.phone_number}
                                                    onChange={handleFormChange}
                                                    className={`${styles.contactForm_input} ${errors.phone_number ? styles.error : ''}`}
                                                />
                                                {errors.phone_number && <span className={styles.errorText}>{errors.phone_number}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <textarea
                                                    name="comments"
                                                    placeholder="Ваше сообщение"
                                                    value={formData.comments}
                                                    onChange={handleFormChange}
                                                    className={`${styles.contactForm_input} ${errors.comments ? styles.error : ''}`}
                                                />
                                                {errors.comments && <span className={styles.errorText}>{errors.comments}</span>}
                                            </div>

                                            <div className={`${styles.checkboxGroup} ${errors.privacy_policy_checked ? styles.errorChek : ''}`}>
                                                <label className={styles.checkboxGroup__label}>
                                                    <input
                                                        type="checkbox"
                                                        name="privacy_policy_checked"
                                                        checked={formData.privacy_policy_checked}
                                                        onChange={handleFormChange}
                                                    />
                                                    Я согласен с политикой конфиденциальности
                                                </label>
                                            </div>
                                            {errors.privacy_policy_checked && (
                                                <span className={styles.errorText}>{errors.privacy_policy_checked}</span>
                                            )}

                                            <button type="submit" className={styles.submitButton}>
                                                Отправить заявку
                                            </button>
                                        </form>
                                    )}
                                </div>
                            ))}
                            
                            {isSubmitted && (
                                <div className={`${styles.message} ${styles.botMessage}`}>
                                    Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                                </div>
                            )}
                        </div>
                        
                        {!chatMessages.some(msg => msg.showForm) && !isSubmitted && (
                            <>
                                {showEmojis && (
                                    <div className={styles.emojiPanel}>
                                        <div className={styles.emojiGrid}>
                                            {emojis.map((emoji, index) => (
                                                <span 
                                                    key={index} 
                                                    className={styles.emojiItem}
                                                    onClick={() => addEmoji(emoji)}
                                                >
                                                    {emoji}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                <div className={styles.chatInputContainer}>
                                    <button 
                                        className={styles.emojiToggle}
                                        onClick={toggleEmojis}
                                    >
                                        😊
                                    </button>
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Напишите сообщение..."
                                        className={styles.chatInput}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    />
                                    <button 
                                        className={styles.sendButton}
                                        onClick={handleSendMessage}
                                        disabled={!message.trim()}
                                    >
                                        →
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className={styles.containerGuide__content} onClick={modalOpen}>
                    <img className={styles.containerGuide__content_img} src={emailIcon} alt="Заявки Иброхим" />
                </div>
            )}
        </div>
    );
};

export default Guide;