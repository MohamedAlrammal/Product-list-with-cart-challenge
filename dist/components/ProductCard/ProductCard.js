//make the product card generic (accepts attributes for its name, image, ..etc)
//add the css required and add a click event listener to change the button to counter.
//add the custom event that will be trigerred when the button is clicked or the counter is changed.
import data from '../../../data.json' with { type: 'json' };
class ProductCard extends HTMLElement {
    jsonData;
    constructor() {
        super();
    }
    connectedCallback() {
        let imgSrc = "./assets/images/image-waffle-desktop.jpg", imgWidth = 502, imgHeight = 480;
        let name = "Waffle with Berries";
        let tag = "Waffle";
        let price = 6.50;
        if (this.jsonData != null || this.jsonData != undefined) {
            if (document.documentElement.clientWidth <= 500) {
                imgSrc = this.jsonData.image.mobile;
                imgWidth = 654;
                imgHeight = 424;
            }
            else if (document.documentElement.clientWidth < 1024) {
                imgSrc = this.jsonData.image.tablet;
                imgWidth = 428;
                imgHeight = 424;
            }
            else {
                imgSrc = this.jsonData.image.desktop;
                imgWidth = 502;
                imgHeight = 480;
            }
            name = this.jsonData.name;
            tag = this.jsonData.category;
            price = this.jsonData.price;
        }
        this.innerHTML = `
        <article class="dessert-card">

				<div class="dessert-image-button">

					<img src="${imgSrc}" alt="" width="${imgWidth}" height="${imgHeight}">

					<button class="dessert-card-button"> <img src="./assets/images/icon-add-to-cart.svg" alt=""
							width="21" height="20"> Add to Cart</button>

				</div>

				<div class="dessert-card-info">
					<span class="tag">${tag}</span>

					<h2 class="dessert-name">${name}</h2>

					<span class="price">$${price.toFixed(2)}</span>
				</div>



		</article>`;
    }
}
//define the new element.
customElements.define("product-card", ProductCard);
//loading data from the data.json file into the cards and create them.
for (let datum of data) {
    const card = document.createElement('product-card');
    card.jsonData = datum;
    document.querySelector(".dessert-list")?.appendChild(card);
}
//# sourceMappingURL=ProductCard.js.map