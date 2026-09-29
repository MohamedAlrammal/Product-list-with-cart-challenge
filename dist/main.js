import data from '../data.json' with { type: 'json' };
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductCart } from './components/ProductCart/ProductCart';
//define the card(not cart)
customElements.define("product-card", ProductCard);
//loading data from the data.json file into the cards and create them.
for (let datum of data) {
    const card = document.createElement('product-card');
    card.jsonData = datum;
    document.querySelector(".dessert-list")?.appendChild(card);
}
//define the cart(not card) element.
customElements.define('product-cart', ProductCart);
const cart = document.createElement('product-card');
document.querySelector("main")?.appendChild(cart);
//# sourceMappingURL=main.js.map