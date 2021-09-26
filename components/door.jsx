import styles from "../styles/door.module.css";

const Door = (props) => {
    return (
        <div className={styles.door}>
            <div className={styles.number}>3</div>
        </div>
    );
}

export default Door;