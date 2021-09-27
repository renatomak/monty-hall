import styles from "../styles/gift.module.css";

const Gift = () => {
    return (
        <div className={styles.gift}>
            <div className={styles.cover}></div>
            <div className={styles.body}></div>
            <div className={styles.tieOne}></div>
            <div className={styles.tieTwo}></div>
        </div>
    );
}

export default Gift;