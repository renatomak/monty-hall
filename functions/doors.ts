import DoorModel from '../model/door';

export const createDoors = (qtde: number, selected: number): DoorModel[] => {
  return Array.from({ length: qtde }, (_, i) => {
    const number = i + 1;

    const haveGift = number === selected;

    return new DoorModel(number, haveGift);
  });
};

export const updateDoors = (
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] => {

    return doors.map(currentDoor => {
        const equalModified = currentDoor.number === modifiedDoor.number;

        if(equalModified) {
            return modifiedDoor;
        }
        return modifiedDoor.open ? currentDoor : currentDoor.deselect();
    })
};
