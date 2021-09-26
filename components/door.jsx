import styles from '../styles/door.module.css';

const Door = (props) => {
    const { selected } = props;
    const selectedClass = selected ? styles.selected : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedClass}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.doorknob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
