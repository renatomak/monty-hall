export default class DoorModel {
    #number: number
    #haveGift: boolean
    #doorWithGift: boolean
    #open: boolean

    constructor(number: number, haveGift=false, doorWithGift = false, open=false) {
        this.#number =  number
        this.#haveGift = haveGift
        this.#doorWithGift = doorWithGift
        this.#open = open
    }

    get number() {
        return this.#number;
    }
    
    get haveGift() {
        return this.#haveGift;
    }

    get doorWithGift() {
        return this.#doorWithGift;
    }

    get open() {
        return this.#open;
    }

    get close() {
        return !this.open;
    }

    deselect() {
        const select = false;
        return new DoorModel(this.number, this.haveGift, select, this.open)
    }

    changeSelected() {
        const select = !this.doorWithGift;
        return new DoorModel(this.number, this.haveGift, select, this.open)
    }

    toOpen() {
        const toOpen = true;
        return new DoorModel(this.number, this.haveGift, this.doorWithGift, toOpen)
    }
}