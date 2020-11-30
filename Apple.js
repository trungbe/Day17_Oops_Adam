class Apple {
    constructor() {
        this._weight = 10;
    }

    get weight() {
        return this._weight;
    }

    isEmpty() {
        if (this._weight <= 0) {
            return false;
        }
        return true;
    }

    decrease() {
        this._weight--;
    }
}
