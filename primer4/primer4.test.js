// Import the necessary modules
import Product from './Product.js';
import Inventory from './Inventory.js';
import Clothing from './Clothing.js';
import Electronics from './Electronics.js';

describe('Inventory', () => {
  let inventory;
  let product1, product2, product3, product4, product5, product6;

  beforeEach(() => {
    inventory = new Inventory();
    product1 = new Product("A123", "T-shirt", 19.99, 100);
    product2 = new Product("B456", "Jeans", 49.99, 50);
    product3 = new Clothing("A124", "T-shirt", 19.99, 100, "M", "Cotton");
    product4 = new Electronics("C789", "Laptop", 699.99, 10, "Apple", "24 months");
    product5 = new Electronics("D012", "Smartphone", 399.99, 20, "Samsung", "12 months");
    product6 = new Clothing("E345", "Jeans", 49.99, 50, "L", "Denim");
  });

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.addProduct(product3);
      inventory.addProduct(product4);
      inventory.addProduct(product5);
      inventory.addProduct(product6);
      expect(inventory.getNumOfItems()).toBe(6);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(product1);
      expect(() => inventory.addProduct(product1)).toThrowError(`Product with ID ${product1.id} already exists.`);
    });
  });

  describe('Updating Product Quantities', () => {
    test('can update the quantity of a product', () => {
      inventory.addProduct(product1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("C789", 75)).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual(product2.getProductDetails());
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("C789")).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of products', () => {
        inventory.addProduct(product3);
        inventory.addProduct(product5);
        
        expect(inventory.getProduct("A124")).toEqual({
            id: "A124",
            name: "T-shirt",
            price: 19.99,
            quantity: 100,
            size: "M",
            material: "Cotton"
        });

        expect(inventory.getProduct("D012")).toEqual({
            id: "D012",
            name: "Smartphone",
            price: 399.99,
            quantity: 20,
            brand: "Samsung",
            warranty: "12 months"
        });
    });
  });
});
