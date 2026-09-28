"use strict";
class AddToCartEvent extends Event {
    #data = undefined;
    constructor(data) {
        super("addToCartEvent");
        this.#data = data;
    }
    get data() {
        return this.#data;
    }
}
//# sourceMappingURL=events.js.map