import { useState } from 'react';
import styles from './guide.module.scss';
import emailIcon from './img/icons8-cообщение-облачко.svg';

const Guide = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [showEmojis, setShowEmojis] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { text: 'Привет! Чем могу помочь?', isBot: true}
    ]);

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
    const modalClose = () => setIsModalOpen(false);

    const addEmoji = (emoji) => {
        setMessage(prev => prev + emoji);
    };

    const toggleEmojis = () => {
        setShowEmojis(!showEmojis);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;

        setChatMessages([...chatMessages, { text: message, isBot: false }]);
        setMessage('');

        setTimeout(() => {
            setChatMessages(prev => [
                ...prev,
                {
                    text: 'Спасибо за ваш вопрос! Мы ответим вам в ближайшее время.', isBot: true
                }
            ])
        }, 1000)
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
                            </div>
                        ))}
                        </div>
                        
                        {/* Панель смайликов */}
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
                    </div>
                </div>
            ):(
                <div className={styles.containerGuide__content} onClick={modalOpen}>
                    <img className={styles.containerGuide__content_img} src={emailIcon} alt="Заявки Иброхим" />
                </div>
            )}
        </div>
    )
}

export default Guide