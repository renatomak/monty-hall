import styles from '../../styles/game.module.css';
import { useState } from "react";
import Door from "../../components/door";
import { createDoors, updateDoors } from "../../functions/doors";
import Link from 'next/link';


const Game = () => {
    const [doors, setDoors] = useState(createDoors(4, 4));

    const renderDoors = () => {
      return doors.map((door) => {
        return (
          <Door
            key={door.number}
            value={door}
            onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
          />
        );
      });
    };
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
               {renderDoors()} 
            </div>
            <div className={styles.buttons}>
              <Link href="/">
                <button>Reniciar jogo</button>
              </Link>
            </div>
        </div>
    );
}

export default Game;

