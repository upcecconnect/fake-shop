<script setup lang="ts">
import { usePayByBankBankStore } from '@/stores/usePayByBankStore';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { smAndDown } = useDisplay();
const payByBankStore = usePayByBankBankStore();
const {
    buttonVariant,
    buttonLocale,
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
</script>

<template>
  <v-row>
    <v-col cols=12>
      <div 
        class="d-flex align-center justify-space-between mb-5"
        :class="{ 'flex-column': smAndDown, 'text-center': smAndDown }"
      >
        <h4 class="text-h5 text-center">{{ $t('text.pay.by.bank.form.params') }}</h4>
      </div>
      <v-form ref="paramsFormElement" @submit.prevent>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.button.params') }}</h3>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="buttonVariant"
              :items="['outlined', 'primary', 'dark' ]"
              :label="$t('label.variant')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="buttonLocale"
              :items="['en', 'uk' ]"
              :label="$t('label.locale')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="paymentMode"
              :items="['default', 'redirect' ]"
              :label="$t('label.payment.mode')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.payment.params') }}</h3>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="creditorIBAN"
              :label="$t('label.IBAN')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="currencyNumericCode"
              :label="$t('label.currency.numeric.code')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="locale"
              :items="['en', 'uk' ]"
              :label="$t('label.locale')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="merchantID"
              :label="$t('label.merchant.id')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="orderId"
              :label="$t('label.order.id')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="purchaseDescription"
              :label="$t('label.purchase.description')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="purchaseTime"
              :label="$t('label.purchase.time')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="sessionData"
              :label="$t('label.session.data')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="signature"
              :label="$t('label.signature')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="totalAmountCents"
              :label="$t('label.total.amount.cents')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="url"
              :label="$t('label.request.url')"
              variant="outlined"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>