import data from '../data.json' with { type: 'json' }
import { ProductCard } from './components/ProductCard/ProductCard.js';
import { ProductCart } from './components/ProductCart/ProductCart.js';

//define the card(not cart)
customElements.define("product-card", ProductCard);


//loading data from the data.json file into the cards and create them.
for (let datum of data) {
    const card = document.createElement('product-card') as ProductCard;

    card.jsonData = datum;

    document.querySelector(".dessert-list")?.appendChild(card);

}

//define the cart(not card) element.
customElements.define('product-cart', ProductCart);

const cart = document.createElement('product-cart') as ProductCart;

document.querySelector("main")?.appendChild(cart);

