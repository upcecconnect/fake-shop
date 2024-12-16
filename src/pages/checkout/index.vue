<script setup lang="ts">
import { computed } from 'vue';
import { nextTick } from 'vue';
import { onMounted } from 'vue';
import { watch } from 'vue';
import { PropType } from 'vue';
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import StepFirst from './components/StepFirst.vue';
import StepSecond from './components/StepSecond.vue';
import { IconBasket } from '@tabler/icons-vue';
import { IconFileDescription } from '@tabler/icons-vue';
import { RouteName } from '@/router/RouteName';
import { PaymentMode } from '@/enums/PaymentMode';
import { submitPaymentRedirect } from '@/utils/submitPayment/submitPaymentRedirect';
import { submitPaymentBuiltIn } from '@/utils/submitPayment/submitPaymentBuiltIn';
import { submitPaymentModal } from '@/utils/submitPayment/submitPaymentModal';
import { usePayByBankBankStore } from '@/stores/usePayByBankStore';
import { useI18n } from 'vue-i18n';
import { NUPCPayByBank } from '@/types/pay-by-bank';

const props = defineProps({
  mode: {
    type: String as PropType<PaymentMode>,
    required: false,
    default: PaymentMode.Redirect,
  },
});

const i18n = useI18n();
const payByBankStore = usePayByBankBankStore();
const {
    buttonVariant,
    buttonLocale,
    buttonWrapperSelector,
    paymentMode,
    creditorIBAN,
    currencyNumericCode,
    locale,
    merchantID,
    orderId,
    purchaseDescription,
    purchaseTime,
    sessionData,
    signature,
    totalAmountCents,
    url
} = storeToRefs(payByBankStore);
const page = ref({ title: 'Checkout' });
const breadcrumbs = ref([
  {
    text: 'UPC demo-shop',
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
  if (props.mode === PaymentMode.Redirect) {
    submitPaymentRedirect();
    return;
  }
  if (props.mode === PaymentMode.BuiltInIframe) {
    submitPaymentBuiltIn();
    return;
  }
  if (props.mode === PaymentMode.ModalIframe) {
    submitPaymentModal();
    return;
  }
}

const button = ref<NUPCPayByBank.PayByBank|null>(null);

onMounted(() => {
  if (props.mode === PaymentMode.PayByBank) {
    tab.value = 'tab-2';
    nextTick(() => {
      buttonLocale.value = i18n.locale.value as NUPCPayByBank.Locale;
      button.value = new window.UPCPayByBank({
        buttonProps: {
          locale: buttonLocale.value,
          variant: buttonVariant.value,
          wrapperSelector: buttonWrapperSelector.value,
          mode: paymentMode.value,
        },
        getPaymentProps() {
          return {
            orderId: orderId.value,
            url: url.value,
            creditorIBAN: creditorIBAN.value,
            currencyNumericCode: currencyNumericCode.value,
            locale: locale.value,
            merchantID: merchantID.value,
            purchaseDescription: purchaseDescription.value,
            purchaseTime: purchaseTime.value,
            signature: signature.value,
            totalAmountCents: totalAmountCents.value,
            sessionData: sessionData.value,
          }
        },
        callback: () => {
          orderId.value = Date.now().toString();
        }
      });
    })
  }
});

watch(buttonLocale, (newValue: NUPCPayByBank.Locale) => {
  if (button.value) {
    button.value.buttonProps.locale = newValue;
  }
});

watch(buttonVariant, (newValue: NUPCPayByBank.Variant) => {
  if (button.value) {
    button.value.buttonProps.variant = newValue;
  }
});

watch(paymentMode, (newValue: NUPCPayByBank.PaymentMode) => {
  if (button.value) {
    button.value.buttonProps.mode = newValue;
  }
});
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
          <IconBasket stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>{{ $t('text.item.cart') }}</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              {{ $t('text.product.summary') }}
            </span>
          </div>
        </v-tab>

        <v-tab value="tab-2" rounded="md" class="mb-3 mx-2 text-left" height="70" :disabled="selectedProducts.size < 1">
          <IconFileDescription stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>{{ $t('text.billing') }}</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              {{ $t('text.billing.information') }}
            </span>
          </div>
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="tab-1" class="pa-1">
          <StepFirst :mode="mode" />
          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <v-btn 
                color="primary"
                variant="tonal"
                :to="{ name: RouteName.Products, query: { ...$route.query } }"
              >
                {{ $t('action.continue.shopping') }}
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="text-sm-right">
              <v-btn
                v-if="selectedProducts.size >= 1"
                color="primary"
                @click="changeTab('tab-2')"
              >
                {{ $t('action.checkout') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="tab-2" class="pa-1">
          <StepSecond :mode="mode" />
          <v-row class="mt-3">
            <v-col cols="12" md="6">
              <v-btn
                v-if="mode !== PaymentMode.Manual"
                color="primary"
                variant="tonal"
                @click="changeTab('tab-1')"
              >
                {{ $t('action.back') }}
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-right">
              <v-btn
                v-if="mode !== PaymentMode.Manual && mode !== PaymentMode.PayByBank"
                color="primary"
                :disabled="!isInitPaymentButtonClickable"
                @click="initPayment"
              >
                {{ $t('action.complete.an.order') }}
              </v-btn>
              <div v-if="mode === PaymentMode.PayByBank" id="pay-by-bank"></div>
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