
import About from "../component/About/about";
import Customers from "../component/customers/customers";
import Experience from "../component/experience/experience";
import PicturesComponent from "../component/Pictures/pictures";
import RecentProjects from "../component/RecentProjects/RecentProjects"
import styles from "../pagesStyle/style.module.scss"

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
            <PicturesComponent modalClose={modalClose} modalOpen={modalOpen} isModalOpen={isModalOpen} homeRef={homeRef} />
            <About aboutRef={aboutRef} />
            <Experience  experiencesRef={experiencesRef} />
            <RecentProjects projectsRef={projectsRef} />
            <Customers customersRef={customersRef} />
        </div>
    )
}

export default HomePage