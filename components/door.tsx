import DoorModel from '../model/door';
import styles from '../styles/door.module.css';
import Gift from './gift';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
  const door = props.value;
  const { doorWithGift, number } = door;
  const selectedClass = doorWithGift && !door.open ? styles.doorWithGift : '';

  const toggleSelection = (e) => props.onChange(door.changeSelected());
  const OpenTheDoor = (e) => {
    e.stopPropagation();
    props.onChange(door.toOpen());
  };

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{number}</div>
        <div className={styles.doorknob} onClick={OpenTheDoor}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selectedClass}`}>
        {door.close ? renderDoor() : door.haveGift ? <Gift /> : null}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
