type JsonData = {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    price: number;
    category: string;
};
declare class ProductCard extends HTMLElement {
    jsonData: JsonData;
    constructor();
    set data(data: JsonData);
    connectedCallback(): void;
}
declare function loadCards(): Promise<void>;
//# sourceMappingURL=ProductCard.d.ts.map