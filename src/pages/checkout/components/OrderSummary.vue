<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import { asCurrency } from '@/utils/asCurrency';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { total, subTotal, discount } = storeToRefs(cartStore);

</script>

<template>
  <v-card variant="outlined" class="my-3">
    <v-card-item>
      <h5 class="text-h5 mb-6">{{ $t('text.order.summary') }}</h5>

      <div class="d-flex align-center justify-space-between my-5">
        <h6 class="text-h6 font-weight-regular">{{ $t('text.sub.total') }}</h6>
        <h6 class="font-weight-semibold text-h6">{{ asCurrency(subTotal) }} UAH</h6>
      </div>

      <div class="d-flex align-center justify-space-between my-5">
        <h6 class="text-h6 font-weight-regular">{{ $t('text.discount') }} 5%</h6>
        <h6 class="font-weight-semibold text-h6 text-error">- {{ asCurrency(discount) }} UAH</h6>
      </div>

      <div class="d-flex align-center justify-space-between my-5">
        <h6 class="text-h6">{{ $t('text.total') }}</h6>
        <h6 class="font-weight-semibold text-h5">{{ asCurrency(total) }} UAH</h6>
      </div>
    </v-card-item>
  </v-card>
</template>
