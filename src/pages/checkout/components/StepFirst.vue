<script setup lang="ts">
import { asCurrency } from '@/utils/asCurrency';
import { computed } from 'vue';
import imageEmpty from '@/assets/images/products/empty-shopping-cart.svg';
import { IconMinus } from '@tabler/icons-vue';
import { onMounted } from 'vue';
import OrderSummary from './OrderSummary.vue';
import { PaymentMode } from '@/enums/PaymentMode';
import { IconPlus } from '@tabler/icons-vue';
import type { Product } from '@/types/Product';
import type { ProductWithQuantity } from '@/types/ProductWithQuantity';
import { PropType } from 'vue';
import { RouteName } from '@/router/RouteName';
import { storeToRefs } from 'pinia';
import { IconTrash } from '@tabler/icons-vue';
import { useCartStore } from '@/stores/useCartStore';

defineProps({
  mode: {
    type: String as PropType<PaymentMode>,
    required: false,
    default: PaymentMode.Redirect,
  },
});

const cartStore = useCartStore();
const { selectedProducts, paymentDescription } = storeToRefs(cartStore);

const productsComputed = computed<readonly ProductWithQuantity[]>(() => {
  return Array.from(selectedProducts.value.values());
});

const removeItemFromCart = (id: Product['id']) => {
  cartStore.removeProductFromCart(id);
};

const paymentDescriptionComputed = computed({
  get() {
    return paymentDescription.value;
  },
  set(value: string) {
    cartStore.$patch({
      paymentDescription: value,
    });
  },
});

onMounted(() => {
  const titles = productsComputed.value.map((product) => product.name);
  paymentDescriptionComputed.value = `Payment for: ${titles.join(', ')}`;
})

</script>
<template>
  <div v-if="selectedProducts.size > 0">
    <h5 class="text-h5 my-8">{{ $t('text.item.cart') }} ({{ selectedProducts.size }})</h5>
    <v-divider />
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-subtitle-1 font-weight-semibold">{{ $t('text.product') }}</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">{{ $t('text.price') }}</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">{{ $t('text.quantity') }}</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">{{ $t('text.total') }}</th>
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
                <IconMinus size="18" />
              </v-btn>

              <v-btn size="x-small">
                {{ item.quantity }}
              </v-btn>

              <v-btn size="x-small" @click="cartStore.incrementQuantity(item.id)">
                <IconPlus size="18" />
              </v-btn>
            </v-btn-toggle>
          </td>
          <td class="text-h5">{{ asCurrency(item.offerPrice * item.quantity) }} UAH</td>
          <td class="text-right">
            <v-btn small icon flat elevation="0" @click="removeItemFromCart(item.id)">
              <IconTrash size="18" class="text-error" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-text-field
      v-if="mode !== PaymentMode.Manual"
      v-model="paymentDescriptionComputed"
      hide-details="auto"
      label="Payment Description"
      variant="outlined"
    />
    <OrderSummary />
  </div>
  <div v-else class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col class="text-center" lg="6">
        <v-img :src="imageEmpty" alt="cover" width="300px" class="mx-auto mt-5" />
        <h5 class="text-h5">{{ $t('text.cart.is.empty') }}</h5>
        <v-btn
          class="mt-3"
          :to="{ name: RouteName.Products, query: { ...$route.query } }"
          variant="flat"
          color="primary"
        >
          {{ $t('action.go.back.to.shopping') }}
        </v-btn>
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
