<script setup lang="ts">
import { computed } from 'vue';
import { PropType } from 'vue';
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import StepFirst from './components/StepFirst.vue';
import StepSecond from './components/StepSecond.vue';
import { BasketIcon  } from 'vue-tabler-icons';
import { FileDescriptionIcon } from 'vue-tabler-icons';
import { RouteName } from '@/router/RouteName';
import { submitPayment } from '@/utils/submitPayment';
import { PaymentMode } from '@/types/PaymentMode';

const props = defineProps({
  mode: {
    type: String as PropType<PaymentMode>,
    required: false,
    default: PaymentMode.Redirect,
  },
});

const page = ref({ title: 'Checkout' });
const breadcrumbs = ref([
  {
    text: 'UPC demo shop',
    disabled: false,
    href: '#'
  },
  {
    text: 'Checkout Page',
    disabled: true,
    href: '#'
  }
]);

const cartStore = useCartStore();
const { selectedProducts, billingAddress } = storeToRefs(cartStore);

const tab = ref('tab-1');

const isInitPaymentButtonClickable = computed<boolean>(() => {
  return billingAddress.value !== null;
});

const changeTab = (e: string) => {
  tab.value = e;
}

const initPayment = () => {
  submitPayment(props.mode);
}
</script>

<template>
  <div class="mt-3 mb-6">
    <div class="d-flex justify-space-between">
      <div class="d-flex py-0 align-center">
        <div>
          <h3 class="text-h3 mb-2">{{ page.title }}</h3>
          <v-breadcrumbs :items="breadcrumbs" class=" pa-0 ml-n1">
            <template v-slot:divider v-if="breadcrumbs">
              <v-icon>mdi-chevron-right</v-icon>
            </template>
            <template v-slot:title="{ item }">
              <h6 class="text-h6 font-weight-regular">{{ item.text }}</h6>
            </template>
          </v-breadcrumbs>
        </div>
      </div>
    </div>
  </div>
  <v-card variant="outlined" class="bg-surface">
    <v-card-text>
      <v-tabs v-model="tab" color="primary" class="customTab">
        <v-tab value="tab-1" rounded="md" class="mb-3 mx-2 text-left" height="70">
          <BasketIcon stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>Item Cart</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">Product
              Summary</span>
          </div>
        </v-tab>

        <v-tab value="tab-2" rounded="md" class="mb-3 mx-2 text-left" height="70" :disabled="selectedProducts.size < 1">
          <FileDescriptionIcon stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>Billing</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Billing Information
            </span>
          </div>
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="tab-1" class="pa-1">
          <StepFirst />
          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <v-btn color="primary" variant="tonal" :to="{ name: RouteName.Products, query: { ...$route.query } }">Continue Shopping</v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="text-sm-right">
              <v-btn color="primary" @click="changeTab('tab-2')" v-if="selectedProducts.size >= 1">CheckOut</v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="tab-2" class="pa-1">
          <StepSecond :mode="mode" />
          <v-row class="mt-3">
            <v-col cols="6">
              <v-btn color="primary" variant="tonal" @click="changeTab('tab-1')">Back</v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                v-if="mode !== PaymentMode.Manual"
                color="primary"
                :disabled="!isInitPaymentButtonClickable"
                @click="initPayment"
              >
                Complete an Order
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
  .page-breadcrumb {
    .v-toolbar {
      background: transparent;
    }
  }
  .customTab {
    min-height: 68px;
  }
</style>