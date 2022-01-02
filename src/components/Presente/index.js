import styles from "./Presente.module.css"

export default function Presente({className}) {
    return (
        <div className={`${styles.presente} ${className}`}>
            <div className={styles.laço}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.tampa}>
                <span className={styles.fita}></span>
            </div>
            <div className={styles.corpo}>
                <span className={styles.fita}></span>
                <span className={styles.fita2}></span>
            </div>
        </div>
    )
}