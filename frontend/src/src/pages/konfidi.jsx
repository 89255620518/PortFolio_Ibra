import KonfidiComponent from "../component/KonfidiComponent/KonfidiComponent"
import { Helmet } from 'react-helmet';

const Konfidi = () => {

    return (
        <div>
            <Helmet>
                <title>Политика конфиденциальности | Эргешев Иброхим - Fullstack разработчик</title>
                <meta 
                    name="description" 
                    content="Политика обработки персональных данных fullstack разработчика Эргешева Иброхима. Условия сбора и защиты информации через формы обратной связи." 
                />
                <meta 
                    property="og:title" 
                    content="Политика конфиденциальности | Эргешев Иброхим - Fullstack разработчик" 
                />
                <meta
                    property="og:description"
                    content="Политика конфиденциальности и обработки персональных данных для посетителей сайта fullstack разработчика"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <KonfidiComponent />
        </div>
    )
}

export default Konfidi;