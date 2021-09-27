import DoorModel from '../model/door';
import styles from '../styles/door.module.css';

interface DoorProps {
  door: DoorModel
}

const Door = (props: DoorProps) => {
    const { selected, number } = props.door;
    const selectedClass = selected ? styles.selected : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedClass}`}>
        <div className={styles.door}>
          <div className={styles.number}>{number}</div>
          <div className={styles.doorknob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
