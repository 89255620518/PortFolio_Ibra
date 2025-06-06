
import About from "../component/About/about";
import Experience from "../component/experience/experience";
import PicturesComponent from "../component/Pictures/pictures";
import styles from "../pagesStyle/style.module.scss"

const HomePage = ({ modalOpen, modalClose, isModalOpen, homeRef }) => {
    return (
        <div className={styles.containerHome} ref={homeRef} style={{ position: 'relative' }} >
            <PicturesComponent modalClose={modalClose} modalOpen={modalOpen} isModalOpen={isModalOpen} homeRef={homeRef} />
            <About />
            <Experience />
        </div>
    )
}

export default HomePage