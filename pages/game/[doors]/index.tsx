import styles from '../../../styles/game.module.css';
import { useEffect, useState } from 'react';
import Door from '../../../components/door';
import { createDoors, updateDoors } from '../../../functions/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Game = () => {
  const router = useRouter();
  const [Doors, setDoors] = useState([]);

  const { doors } = router.query;

  const generateWinningDoorNumber = (value) => Math.floor(Math.random() * parseInt(value) + 1);

  useEffect(() => {
    const numDoors = +doors;
    const doorHaveGift = generateWinningDoorNumber(numDoors);
    console.log(numDoors, doorHaveGift)
    const listDoor = createDoors(numDoors, doorHaveGift);
    setDoors(listDoor);
  }, [doors]);

  const renderDoors = () => {
    return Doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(Doors, newDoor))}
        />
      );
    });
  };
  return (
    <div id={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reniciar jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
