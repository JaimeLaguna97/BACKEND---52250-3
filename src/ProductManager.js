import { promises as fs } from 'fs';

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async getProducts(limit) {
    try {
      const fileContent = await fs.readFile(this.path, 'utf-8');
      const products = JSON.parse(fileContent);

      if (limit) {
        return products.slice(0, limit);
      } else {
        return products;
      }
    } catch (error) {
      return [];
    }
  }

  async getProductById(id) {
    const products = await this.getProducts();
    return products.find((product) => product.id === Number(id));
  }
}

export default ProductManager;