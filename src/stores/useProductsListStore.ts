import { defineStore } from 'pinia';
import type { Product } from '@/types/Product';
import { fetchProducts } from '@/api/products/fetch-products';

export const useProductsListStore = defineStore({
    id: 'products/list',
    state: () => ({
      products: [] as readonly Product[],
    }),
    getters: {
      productsHashedById(): Map<number, Product> {
        return new Map(this.products.map((product) => [product.id, product]));
      },
    },
    actions: {
      async fetchProducts() {
        try {
          this.products = await fetchProducts();
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },
    },
});
