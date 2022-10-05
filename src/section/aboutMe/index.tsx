import styles from "./styles.module.scss"
import { SplideCards } from "../../components/splideCard"

export const AboutMe = () =>(

    <>
    <div className={styles.container}>
    <h2 className={styles.title}>Sobre mim</h2>
    <p className={styles.subTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat tenetur nemo id optio ut distinctio eveniet ipsa rerum voluptate esse reprehenderit magni.</p>
     <SplideCards/>
    </div>
    </>
)