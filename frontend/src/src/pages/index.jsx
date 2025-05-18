
import PicturesComponent from "../component/Pictures/pictures";
import styles from "../pagesStyle/style.module.scss"

const HomePage = () => {
    return (
        <div className={styles.containerHome} >
            <PicturesComponent />
        </div>
    )
}

export default HomePage