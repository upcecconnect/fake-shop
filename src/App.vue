<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { IconShoppingCart } from '@tabler/icons-vue';
import { IconCreditCard } from '@tabler/icons-vue';
import { IconWorld } from '@tabler/icons-vue';
import { useProductsListStore } from '@/stores/useProductsListStore';
import { useI18n } from 'vue-i18n';
import { setLocale } from './i18n/setLocale';
import { LocaleCode } from './enums/LocaleCode';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { smAndDown } = useDisplay();
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

const i18n = useI18n();

const changeLocale = () => {
  setLocale(i18n.locale.value as LocaleCode === LocaleCode.En ? LocaleCode.Uk : LocaleCode.En);
};
</script>

<template>
  <v-app
    v-if="isLoaded"
    theme="BLUE_THEME"
    class="BLUE_THEME"
  >
    <v-app-bar elevation="10" priority="0" class="horizontal-header" color="">
      <div class="header pl-4">
        <router-link v-show="!smAndDown" to="/">
          <img src="@/assets/images/logos/upc.jpeg" alt="upc" />
          <img src="@/assets/images/logos/ecconnect.svg" alt="ecconnect" />
        </router-link>
        <router-link to="/">
          <h3>{{ $t('text.demo.shop') }}</h3>
        </router-link>
        <div>
          <v-btn
            icon
            variant="text"
            color="primary"
            :title="$t('title.test.cards')"
            class="mr-5"
            :to="{ name: RouteName.TestCards, query: { ...$route.query } }"
          >
            <IconCreditCard stroke-width="1.5" size="22"  />
          </v-btn>
          <v-btn
            v-if="$route.name === RouteName.Config"
            icon
            variant="text"
            color="primary"
            :title="$t('title.language')"
            class="mr-5"
            @click="changeLocale"
          >
            <IconWorld stroke-width="1.5" size="22"  />
            <span>{{ $i18n.locale.toUpperCase() }}</span>
          </v-btn>
          <v-btn
            v-if="$route.name !== RouteName.Config"
            icon
            variant="text"
            :title="$t('title.shopping.cart')"
            color="primary"
            :to="{ name: RouteName.Checkout, query: { ...$route.query } }"
          >
            <v-badge color="error" :content="selectedProducts.size">
              <IconShoppingCart stroke-width="1.5" size="22" />
            </v-badge>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="page-wrapper pb-sm-15 pb-10">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>