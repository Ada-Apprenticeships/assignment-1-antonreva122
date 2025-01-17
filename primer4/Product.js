class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      this.setId(id);
      this.setName(name);
      this.setPrice(price);
      this.setQuantity(quantity);
    }
  
    get id() {
      return this.#id;
    }
    get name() {
      return this.#name;
    }
    get price() {
      return this.#price;
    }
  
    get quantity() {
      return this.#quantity;
    }
    
    set quantity(newQuantity) {
      this.setQuantity(newQuantity);
    }

    setId(id) {
      if (typeof id !== 'string' && id.trim() === '') {
        throw new Error('Invalid ID: ID must be a non-empty string.');
    }
      this.#id = id;
    }

    setName(name) {
      if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Name must be a non-empty string.');
      }
      this.#name = name;
    }

    setPrice(price) {
      if (typeof price !== 'number' || price <= 0 || !Number.isFinite(price)) {
        throw new Error('Price must be a positive number.');
      }
      this.#price = price;
    }

    setQuantity(quantity) {
      if (typeof quantity !== 'number' || quantity < 0 || !Number.isFinite(quantity)) {
        throw new Error('Quantity must be a non-negative integer.');
      }
      this.#quantity = quantity;
    }
  
    getProductDetails() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      };
    }


  }
  export default Product;
