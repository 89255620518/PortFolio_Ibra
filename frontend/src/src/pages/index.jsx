
import { useRef } from "react";
import PicturesComponent from "../component/Pictures/pictures";
import styles from "../pagesStyle/style.module.scss"

const HomePage = ({ modalOpen, modalClose, isModalOpen }) => {
    const homeRef = useRef(null)
    return (
        <div className={styles.containerHome} ref={homeRef} style={{ position: 'relative' }} >
            <PicturesComponent modalClose={modalClose} modalOpen={modalOpen} isModalOpen={isModalOpen} homeRef={homeRef} />
        </div>
    )
}

export default HomePage