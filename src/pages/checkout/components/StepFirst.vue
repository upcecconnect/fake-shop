<script setup lang="ts">
import { computed } from 'vue';
import imageEmpty from '@/assets/images/products/empty-shopping-cart.svg';
import { RouteName } from '@/router/RouteName';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import type { Product } from '@/types/Product';
import { asCurrency } from '@/utils/asCurrency';
import type { ProductWithQuantity } from '@/types/ProductWithQuantity';
import { TrashIcon } from 'vue-tabler-icons';
import OrderSummary from './OrderSummary.vue';

const cartStore = useCartStore();
const { selectedProducts } = storeToRefs(cartStore);

const productsComputed = computed<readonly ProductWithQuantity[]>(() => {
  return Array.from(selectedProducts.value.values());
});

const removeItemFromCart = (id: Product['id']) => {
  cartStore.removeProductFromCart(id);
};
</script>
<template>
  <div v-if="selectedProducts.size > 0">
    <h5 class="text-h5 my-8">Cart Item ({{ selectedProducts.size }})</h5>
    <v-divider />
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-subtitle-1 font-weight-semibold">Product</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Price</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Quantity</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Total</th>
          <th class="text-right" aria-hidden="true"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productsComputed" :key="item.id">
          <td>
            <div class="d-flex flex-wrap align-center my-3 gap-2">
              <img alt="product" class="rounded-md custom-img-box" :src="item.image" />
              <div class="ma-2">
                <h6 class="text-h6">{{ item.name }}</h6>
                <span class="text-subtitle-2">{{ item.description }}</span>
              </div>
            </div>
          </td>
          <td>
            <h4 class="text-h5">{{ asCurrency(item.offerPrice) }}</h4>
            <p class="text-decoration-line-through text-medium-emphasis">${{ asCurrency(item.price) }}</p>
          </td>
          <td>
            <v-btn-toggle variant="outlined" divided color="success">
              <v-btn size="x-small" @click="cartStore.decrementQuantity(item.id)" :disabled="item.quantity < 2">
                <MinusIcon size="18" />
              </v-btn>

              <v-btn size="x-small">
                {{ item.quantity }}
              </v-btn>

              <v-btn size="x-small" @click="cartStore.incrementQuantity(item.id)">
                <PlusIcon size="18" />
              </v-btn>
            </v-btn-toggle>
          </td>
          <td class="text-h5">{{ asCurrency(item.offerPrice * item.quantity) }} UAH</td>
          <td class="text-right">
            <v-btn small icon flat elevation="0">
              <TrashIcon size="18" class="text-error" @click="removeItemFromCart(item.id)" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <OrderSummary />
  </div>
  <div v-else class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col class="text-center" lg="6">
        <v-img :src="imageEmpty" alt="cover" width="300px" class="mx-auto mt-5" />
        <h5 class="text-h5">Cart is Empty</h5>
        <v-btn class="mt-3" :to="{ name: RouteName.Products, query: { ...$route.query } }" variant="flat" color="primary">Go Back to Shopping</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style>
  .custom-img-box {
    width: 60px;
    height: 60px;
  }
</style>
