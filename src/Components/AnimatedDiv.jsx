import styles from './AnimatedDiv.module.css'
import ListAnimation from '../Components/ListAnimation'

const AnimatedDiv = () => {
    return (
        <>
            <div className={styles.canvas}>
                <div className={styles.mainContainer}>
                    <p>Hello</p>
                </div>
                <div className={styles.mainContainerDuplicate}>
                    <div className={styles.listDiv}>Hello</div>
                    <div className={styles.listDiv}>Hello</div>
                    <div className={styles.listDiv}>Hello</div>
                    <div className={styles.listDiv}>Hello</div>
                    <div className={styles.listDiv}>Hello</div>
                    <div className={styles.listDiv}>Hello</div> 
                </div>
            </div>
        </>
    )
}


export default AnimatedDiv;