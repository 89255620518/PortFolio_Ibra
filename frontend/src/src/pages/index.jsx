
import About from "../component/About/about";
import Customers from "../component/customers/customers";
import Experience from "../component/experience/experience";
import PicturesComponent from "../component/Pictures/pictures";
import RecentProjects from "../component/RecentProjects/RecentProjects";
import styles from "../pagesStyle/style.module.scss";
import { Helmet } from 'react-helmet';

const HomePage = ({
    modalOpen,
    modalClose,
    isModalOpen,
    homeRef,
    aboutRef,
    experiencesRef,
    projectsRef,
    customersRef
}) => {
    return (
        <div className={styles.containerHome} ref={homeRef} style={{ position: 'relative' }} >
            <Helmet>
                <title>Эргешев Иброхим | Fullstack-разработчик (React, Node.js, Next.js)</title>
                <meta 
                    name="description" 
                    content="Персональное портфолио fullstack-разработчика Эргешева Иброхима. Современные технологии: React, Vite, Node.js, Next.js. Примеры проектов, стек и контакты." 
                />
                <meta 
                    property="og:title" 
                    content="Эргешев Иброхим | Fullstack-разработчик (React, Node.js, Next.js)" 
                />
                <meta
                    property="og:description"
                    content="Персональное портфолио fullstack-разработчика Эргешева Иброхима. Современные технологии: React, Vite, Node.js, Next.js. Примеры проектов, стек и контакты."
                />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <PicturesComponent modalClose={modalClose} modalOpen={modalOpen} isModalOpen={isModalOpen} homeRef={homeRef} />
            <About aboutRef={aboutRef} />
            <Experience  experiencesRef={experiencesRef} />
            <RecentProjects projectsRef={projectsRef} />
            <Customers customersRef={customersRef} />
        </div>
    )
}

export default HomePage