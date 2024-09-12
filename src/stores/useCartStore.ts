import type { Product } from '@/types/Product';
import { defineStore } from 'pinia';
import { useProductsListStore } from './useProductsListStore';
import type { ProductWithQuantity } from '@/types/ProductWithQuantity';
import type { BillingAddress } from '@/types/Address';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    selectedProducts: new Map<Product['id'], ProductWithQuantity>(),
    total: 0,
    discount: 0,
    subTotal: 0,
    billingAddress: null as BillingAddress | null,
  }),
  actions: {
    addProductToCart(productId: Product['id']) {
      const productsListStore = useProductsListStore();
      const product = productsListStore.productsHashedById.get(productId);
      if (product === undefined) {
        return;
      }
      this.selectedProducts.set(productId, { quantity: 1, ...product });
      this.setPrices();
    },
    removeProductFromCart(productId: Product['id']) {
      this.selectedProducts.delete(productId);
    },
    incrementQuantity(productId: Product['id']) {
      const currentProduct = this.selectedProducts.get(productId);
      if (currentProduct === undefined) {
        return;
      }
      this.selectedProducts.set(productId, { ...currentProduct, quantity: currentProduct.quantity + 1 });
      this.setPrices();
    },
    decrementQuantity(productId: Product['id']) {
      const currentProduct = this.selectedProducts.get(productId);
      if (currentProduct === undefined) {
        return;
      }
      if (currentProduct.quantity === 1) {
        return;
      }
      this.selectedProducts.set(productId, { ...currentProduct, quantity: currentProduct.quantity - 1 });
      this.setPrices();
    },
    setPrices() {
      const products = Array.from(this.selectedProducts.values());
      const subTotal = products.reduce((acc, item) => {
        const product = item.offerPrice * item.quantity;
        return acc + product;
      }, 0);
      const discount = Math.round(subTotal * (5 / 100));
      const total = subTotal - discount;
      this.subTotal = subTotal;
      this.discount = discount;
      this.total = total;
    }
  }
});
