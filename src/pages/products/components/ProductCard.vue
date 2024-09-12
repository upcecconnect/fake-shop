<script setup lang="ts">
import type { Product } from '@/types/Product';
import { asCurrency } from '@/utils/asCurrency';
import { ref } from 'vue';
import type { PropType } from 'vue';
import { BasketIcon } from 'vue-tabler-icons';

const props = defineProps({
  name: {
    type: String as PropType<Product['name']>,
    required: true,
  },
  image: {
    type: String as PropType<Product['image']>,
    required: true,
  },
  description: {
    type: String as PropType<Product['description']>,
    required: true,
  },
  rating: {
    type: Number as PropType<Product['rating']>,
    required: true,
  },
  price: {
    type: Number as PropType<Product['price']>,
    required: true,
  },
  offerPrice: {
    type: Number as PropType<Product['offerPrice']>,
    required: true,
  },
});

const emit = defineEmits({
  'select': () => true,
});

const successsnackbar = ref(false);
const rate = ref(props.rating);

const selectProduct = () => {
  emit('select');
  successsnackbar.value = true
};
</script>

<template>
  <v-card variant="outlined" class="rounded card-hover overflow-hidden bg-surface">
    <img alt="product" :src="image" class="w-100" />
    <div class="d-flex justify-end mr-3 mt-n6">
      <v-tooltip text="Add to Cart" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
            color="primary"
            class="ml-auto"
            size="x-small"
            @click="selectProduct"
            >
            <BasketIcon size="18" />
          </v-btn>
        </template>
      </v-tooltip>
    </div>
    <v-card-item class="pt-1">
      <h6 class="text-h6">{{ name }}</h6>
      <div class="d-flex align-center justify-space-between mt-1">
        <div class="d-flex align-center gap-2">
          <h6 class="text-h6">{{ asCurrency(price) }} UAH</h6>
          <p class="text-decoration-line-through text-medium-emphasis">{{ asCurrency(offerPrice) }} UAH</p>
        </div>
        <v-rating  v-model="rate" color="warning" half-increments size="small" density="compact"> </v-rating>
      </div>
    </v-card-item>
    <v-snackbar
      v-model="successsnackbar"
      variant="flat"
      location="bottom right"
      color="primary"
      rounded="md"
      class="text-white"
    >
      Item Added to The Cart
    </v-snackbar>
  </v-card>
</template>

