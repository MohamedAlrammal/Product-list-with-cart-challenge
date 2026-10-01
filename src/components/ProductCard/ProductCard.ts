//make the product card generic (accepts attributes for its name, image, ..etc)
//add the css required and add a click event listener to change the button to counter.
//add the custom event that will be trigerred when the button is clicked or the counter is changed.


const MOBILE_WIDTH = 500;
const TABLET_WIDTH = 1024;

const MOBILE_IMAGE_WIDTH = 502;
const MOBILE_IMAGE_HEIGHT = 480;

const TABLET_IMAGE_WIDTH = 428;
const TABLET_IMAGE_HEIGHT = 424;

const DESKTOP_IMAGE_WIDTH = 502;
const DESKTOP_IMAGE_HEIGHT = 480;

class ProductCard extends HTMLElement {

    jsonData: JsonData | undefined;
    constructor() {
        super();
    }

    connectedCallback() {

        let imgDesktop = "./assets/images/image-waffle-desktop.jpg";
        let imgTablet = "./assets/images/image-waffle-tablet.jpg";
        let imgMobile = "./assets/images/image-waffle-mobile.jpg";
        let name = "Waffle with Berries";
        let tag = "Waffle";
        let price = 6.50;

        if (this.jsonData != null && this.jsonData != undefined) {

            imgDesktop = this.jsonData.image.desktop;
            imgTablet = this.jsonData.image.tablet;
            imgMobile = this.jsonData.image.mobile;

            name = this.jsonData.name;
            tag = this.jsonData.category;
            price = this.jsonData.price;
        }

        this.innerHTML = `
        <article class="dessert-card">

				<div class="dessert-image-button">

                <picture>
                    <source srcset="${imgMobile}" media="(width <= ${MOBILE_WIDTH}px)" width="${MOBILE_IMAGE_WIDTH}" height="${MOBILE_IMAGE_HEIGHT}">
                    <source srcset="${imgTablet}" media="(width <= ${TABLET_WIDTH}px)" width="${TABLET_IMAGE_WIDTH}" height="${TABLET_IMAGE_HEIGHT}">
                    <img src="${imgDesktop}" alt="" width="${DESKTOP_IMAGE_WIDTH}" height="${DESKTOP_IMAGE_HEIGHT}">
                </picture>

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
