<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { RouteName } from '@/router/RouteName';
import { useCartStore } from '@/stores/useCartStore';
import { useProductsListStore } from '@/stores/useProductsListStore';
import { setLocale } from '@/i18n/setLocale';
import { Locales } from '@/enums/LocaleCode';
import { IconShoppingCart } from '@tabler/icons-vue';
import { IconCreditCard } from '@tabler/icons-vue';
import type { Locale } from '@/types/Locale';

const { xs } = useDisplay();
const cartStore = useCartStore();
const { selectedProducts } = storeToRefs(cartStore);
const isLoaded = ref(false);
const i18n = useI18n();

(async () => {
  const productsListStore = useProductsListStore();
  await productsListStore.fetchProducts();
  const cartStore = useCartStore();
  cartStore.addProductToCart(1);
  isLoaded.value = true;
})();


const activeLocale = computed<Locale|undefined>(() => Locales.find(i => i.code === i18n.locale.value))
</script>

<template>
  <v-app v-if="isLoaded" theme="BLUE_THEME" class="BLUE_THEME">
    <v-app-bar elevation="10" priority="0" class="horizontal-header bg-background">
      <v-container class="pl-4 d-flex align-center justify-space-between">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logos/upc.svg" alt="upc" class="mr-3 mr-md-5" />
          <img src="@/assets/images/logos/ecconnect.svg" alt="ecconnect" />
        </router-link>

        <div class="d-flex ga-1 ga-md-4 align-center">
          <v-btn icon variant="text" color="primary" :title="$t('title.test.cards')" size="small"
            :to="{ name: RouteName.TestCards, query: { ...$route.query } }">
            <IconCreditCard stroke-width="1.5" size="22" />
          </v-btn>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="text" size="small" v-bind="props" class=" px-1 px-sm-3">
                <img :src="activeLocale?.img" alt="Flag" class="mr-2" />
                <span v-if="xs">{{ activeLocale?.shortText }}</span>
                <span v-else>{{ activeLocale?.text }}</span>
              </v-btn>
            </template>
            <v-list class="px-0 py-1 mt-2">
              <v-list-item v-for="local in Locales" :key="local.code" class="pa-0 " style="min-height: auto;">
                <v-btn variant="text" rounded="0" class="w-100 justify-start px-3 py-1 " @click="setLocale(local.code)">
                  <img :src="local.img" alt="Flag" class="mr-2" />
                  <span>{{ local.text }}</span>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn v-if="$route.name !== RouteName.Config" icon variant="text" :title="$t('title.shopping.cart')"
            color="primary" :to="{ name: RouteName.Checkout, query: { ...$route.query } }">
            <v-badge color="error" :content="selectedProducts.size">
              <IconShoppingCart stroke-width="1.5" size="22" />
            </v-badge>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.logo img {
  max-height: 30px;

  @media (max-width: 768px) {
    max-height: 22px;
  }
}
</style>