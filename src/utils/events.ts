


class AddToCartEvent extends Event{

    #data:JsonData | undefined = undefined;

    constructor(data:JsonData){
        super("addToCartEvent");
        this.#data = data;
    }

    get data(){
        return this.#data;
    }
}