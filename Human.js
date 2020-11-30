class Human {
    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    checkApple(apple) {
        //check khoi luong
        if (apple.isEmpty() == true) {
            return true
        }
        return false
    }

    eat(apple) {
        //khoi luong nguoi tang sau khi an
        this._weight++;
        //khoi luong tao giam
        apple.decrease();
    }

    say(string) {
        //noi gi do
        console.log = string;
    }
}