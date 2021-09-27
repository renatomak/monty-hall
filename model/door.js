export default class Door {
    #number
    #haveGift
    #selected
    #open

    constructor(number, haveGift=false, selected = false, open=false) {
        this.#number =  number
        this.#haveGift = haveGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number;
    }
    
    get haveGift() {
        return this.#haveGift;
    }

    get selected() {
        return this.#selected;
    }

    get open() {
        return this.#open;
    }

    deselect() {
        const select = false;
        return new Door(this.number, this.haveGift, select, this.open)
    }

    changeSelected() {
        const select = !this.selected;
        return new Door(this.number, this.haveGift, select, this.open)
    }

    toOpen() {
        const toOpen = true;
        return new Door(this.number, this.haveGift, this.selected, toOpen)
    }
}