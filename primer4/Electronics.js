import Product from "./Product.js";

export class Electronics extends Product {
    constructor(id, name, price, quantity, brand, warranty) {
        super(id, name, price, quantity);
        this.brand = brand;
        this.warranty = warranty;
    }

    getProductDetails() {
        const baseDetails = super.getProductDetails();
        return {
            ...baseDetails,
            brand: this.brand,
            warranty: this.warranty,
        };
    }
}

export default Electronics;