//make the product card generic (accepts attributes for its name, image, ..etc)
//add the css required and add a click event listener to change the button to counter.
//add the custom event that will be trigerred when the button is clicked or the counter is changed.
const MOBILE_WIDTH = 500;
const TABLET_WIDTH = 1024;
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
            if (document.documentElement.clientWidth <= MOBILE_WIDTH) {
                imgSrc = this.jsonData.image.mobile;
                imgWidth = 654;
                imgHeight = 424;
            }
            else if (document.documentElement.clientWidth < TABLET_WIDTH) {
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
export { ProductCard };
//# sourceMappingURL=ProductCard.js.map