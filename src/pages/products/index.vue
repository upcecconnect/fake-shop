<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import ProductCard from './components/ProductCard.vue';
import ProductFilters from '@/pages/products/components/ProductFilters.vue';
import { useDisplay } from 'vuetify';
import imageEmpty from '@/assets/images/products/empty-shopping-cart.svg';
import { storeToRefs } from 'pinia';
import type { Product } from '@/types/Product';
import { useProductsListStore } from '@/stores/useProductsListStore';
import { useCartStore } from '@/stores/useCartStore';
import { useProductsFiltersStore } from '@/stores/useProductsFiltersStore';
import { IconMenu2 } from '@tabler/icons-vue';

const { lgAndUp } = useDisplay();
const sDrawer = ref(false);

const productsListStore = useProductsListStore();
const { products } = storeToRefs(productsListStore);

const cartStore = useCartStore();

const userSearchValue = ref('');

const productsFiltersStore = useProductsFiltersStore();
const { selectedGenders, selectedColor, selectedPrice, selectedCategory, selectedRating } = storeToRefs(productsFiltersStore);

const filteredProducts = computed(() => {
  let productsList = [...products.value].sort((item1, item2) => {
    const price1 = item1.price;
    const price2 = item2.price;
    return price1 - price2;
  });
  if (userSearchValue.value) {
    productsList = productsList.filter((product: Product) => {
      return product.name.toLowerCase().includes(userSearchValue.value.toLowerCase());
    });
  }
  if (selectedGenders.value.length) {
    productsList = productsList.filter((product: Product) => {
      return selectedGenders.value.includes(product.gender);
    });
  }
  if (selectedCategory.value !== 'All') {
    productsList = productsList.filter((product: Product) => {
      return product.categories.includes(selectedCategory.value);
    });
  }
  if (selectedColor.value && selectedColor.value !== 'All') {
    productsList = productsList.filter((product: Product) => product.colors.includes(selectedColor.value ?? ''));
  }
  if (selectedPrice.value) {
    const minPrice = selectedPrice.value.min;
    const maxPrice = selectedPrice.value.max;
    productsList = productsList.filter((product: Product) => {
      return product.price > minPrice && (maxPrice ? product.price < maxPrice : true);
    });
  }
  if (selectedRating.value) {
    productsList = productsList.filter((product: Product) => {
      return product.rating >= selectedRating.value;
    });
  }
  return productsList;
});

const addToCart = (productId: Product['id']) => {
  cartStore.addProductToCart(productId);
}
</script>

<template>
    <v-card elevation="10" class="inside-left-sidebar overflow-hidden">
    <div class="d-flex mainbox">
      <div v-if="lgAndUp" class="left-part">
        <ProductFilters />
      </div>
      <div class="right-part">
        <v-btn block @click="sDrawer = !sDrawer" variant="text" class="d-lg-none d-md-flex d-sm-flex">
          <IconMenu2 size="20" class="mr-2" />
          <span>{{ $t('text.menu') }}</span>
        </v-btn>
        <v-divider class="d-lg-none d-block" />
        <v-sheet class="pa-4">
          <div class="d-flex gap-2 align-center mb-4 justify-space-between">
            <h5 class="text-h5 d-none d-lg-flex font-weight-semibold">Products</h5>
            <v-sheet  width="300">
              <v-text-field
                  variant="outlined"
                  v-model="userSearchValue"
                  prepend-inner-icon="mdi-magnify"
                  placeholder="Search Product"
                  hide-details
                  density="compact"
                  color="primary"
              ></v-text-field>
            </v-sheet>
          </div>
          <v-row v-if="filteredProducts.length >= 1">
            <v-col cols="12" lg="4" sm="6" v-for="product in filteredProducts" :key="product.id">
              <ProductCard
                :name="product.name"
                :image="product.image"
                :description="product.description"
                :price="product.price"
                :offerPrice="product.offerPrice"
                :rating="product.rating"
                @select="addToCart(product.id)"
              />
            </v-col>
          </v-row>
          <v-row v-else class="justify-center mt-10">
            <v-col class="text-center" lg="7">
              <v-img :src="imageEmpty" alt="cover" />
              <h1 class="text-h1 mt-6">{{ $t('text.there.is.no.product') }}</h1>
              <p>{{ $t('text.there.is.no.product.description') }}</p>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </div>
    <v-navigation-drawer temporary v-model="sDrawer" width="320" top v-if="!lgAndUp">
      <v-card-text class="pa-0">
        <ProductFilters />
      </v-card-text>
    </v-navigation-drawer>
  </v-card>
</template>

<style scoped lang="scss">
  .mainbox {
    position: relative;
    overflow: hidden;
  }
  .left-part {
    width: 320px;
    border-right: 1px solid rgb(var(--v-border-color));
    min-height: 500px;
    transition: 0.1s ease-in;
    flex-shrink: 0;
  }
  .v-theme--light {
    .left-part {
        background: white;
    }
  }
  .v-theme--dark {
    .left-part {
        background: #2b2b2b;
    }
  }
  .right-part {
    width: 100%;
    min-height: 500px;
    position: relative;
  }
  @media (max-width: 1279px) {
    .v-card {
        position: unset;
    }
  }
</style>
