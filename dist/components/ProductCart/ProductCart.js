class ProductCart extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<article class="cart">

			<h2>Your Cart (0)</h2>

			<img src="./assets/images/illustration-empty-cart.svg" alt="" width="128" height="128">

			<p>Your added items will appear here</p>

		</article>`;
    }
}
export { ProductCart };
//# sourceMappingURL=ProductCart.js.map