<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { ShoppingCartIcon } from 'vue-tabler-icons';
import { CreditCardIcon } from 'vue-tabler-icons';
import { useProductsListStore } from '@/stores/useProductsListStore';

const cartStore = useCartStore();
const { selectedProducts } = storeToRefs(cartStore);
const isLoaded = ref(false);

(async () => {
  const productsListStore = useProductsListStore();
  await productsListStore.fetchProducts();
  const cartStore = useCartStore();
  cartStore.addProductToCart(1);
  isLoaded.value = true;
})();
</script>

<template>
  <v-app
    v-if="isLoaded"
    theme="BLUE_THEME"
    class="BLUE_THEME"
  >
    <v-app-bar elevation="10" priority="0" height="64" class="horizontal-header" color="">
      <div class="maxWidth v-toolbar__content px-lg-0 px-4">
        <div class="d-sm-flex d-none">
          <div class="logo">
            <router-link to="/" class="d-flex">
              <img style="height: 100px;" src="@/assets/images/logos/upc.jpeg" alt="upc" />
              <img src="@/assets/images/logos/ecconnect.svg" class="pl-3" alt="upc" />
            </router-link>
          </div>
        </div>
        <div class="d-sm-none d-flex mr-2">
          <router-link to="/" class="d-flex">
            <img style="height: 100px;" src="@/assets/images/logos/upc.jpeg" alt="upc" />
          </router-link>
        </div>
        <v-spacer />
        <h3>Demo shop</h3>
   
        <v-spacer />
        <v-btn
          icon
          variant="text"
          color="primary"
          title="Test Cards"
          class="mr-5"
          :to="{ name: RouteName.TestCards, query: { ...$route.query } }"
        >
          <CreditCardIcon stroke-width="1.5" size="22"  />
        </v-btn>
        <v-btn icon variant="text" color="primary" :to="{ name: RouteName.Checkout, query: { ...$route.query } }">
          <v-badge color="error" :content="selectedProducts.size">
            <ShoppingCartIcon stroke-width="1.5" size="22" />
          </v-badge>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="page-wrapper pb-sm-15 pb-10">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>