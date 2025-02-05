import Product from "./Product.js";
import Inventory from "./Inventory.js";
import Clothing from "./Clothing.js";
import Electronics from "./Electronics.js";

// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 19.99, 100);
const product2 = new Product("B456", "Jeans", 49.99, 50);
const tshirt = new Clothing("A124", "T-shirt", 19.99, 100, "M", "Cotton");
const laptop = new Electronics("C789", "Laptop", 699.99, 10, "Apple", "24 months");

try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.addProduct(tshirt);
  inventory.addProduct(laptop);
  inventory.updateQuantity("A123", 50);
  const retrievedProduct = inventory.getProduct("A124");
  console.log(retrievedProduct);
  inventory.removeProduct("A123");
} catch (error) {
  console.error("An error occurred:", error.message);
}
