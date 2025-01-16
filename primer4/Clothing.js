import Product from "./Product.js";

class Clothing extends Product {
    constructor(id, name, price, quantity, size, material) {
        super(id, name, price, quantity);   
        this.size = size;
        this.material = material;
    }

    getProductDetails() {
        const baseDetails = super.getProductDetails();
        return {
            ...baseDetails,
            size: this.size,
            material: this.material,
        };
    }
}

export default Clothing;

