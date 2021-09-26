import styles from '../styles/door.module.css';

const Door = (props) => {
  return (
    <div className={styles.area}>
      <div className={styles.frame}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Door;
