<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { PaymentMode } from '@/enums/PaymentMode';
import { useAnimation, smoothScrollTo } from '@/composables/useAnimation'

useAnimation(".payments-animate", { animationType: 'fade-in-up' })

</script>

<template>
  <div class="bg-surface">
    <v-container class="py-lg-16">
      <v-row class="py-10">
        <v-col cols="12" md="6">
          <h1 class="text-h2 text-md-h1 font-weight-medium">{{ $t('title.demo.shop') }}</h1>
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-body-1">{{ $t('text.demo.shop') }}</p>
          <v-btn variant="outlined" class="mt-6 text-none" color="primary" @click="smoothScrollTo('payments')">
            {{ $t('action.try.payment.methods') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container class="payments-container">
    <v-row class="py-6">
      <v-col id="payments" cols="12" class="pt-16 pb-4">
        <h2 class="text-h2 font-weight-medium text-center">{{ $t('title.payment.methods') }}</h2>
      </v-col>
    </v-row>
    <v-row class="payments-animate">
      <v-col cols="12" sm="6">
        <v-card elevation="10" class="overflow-hidden  d-flex flex-column  h-100 pa-6">
          <v-card-item class="pa-0 pb-1">
            <h4 class="text-h5 font-weight-medium">
              {{ $t('text.payment.with.redirect') }}
            </h4>
          </v-card-item>
          <v-card-text class="pa-0 pt-1  d-flex flex-column align-start justify-space-between">
            <p class="text-body-1">{{ $t('text.payment.with.redirect.description') }}</p>
            <v-btn :to="{ name: RouteName.Products, query: { mode: PaymentMode.Redirect } }" variant="flat"
              class="mt-6 text-white" color="primary">
              {{ $t('action.try.it.out') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="10" class="overflow-hidden  d-flex flex-column  h-100 pa-6">
          <v-card-item class="pa-0 pb-1">
            <h4 class="text-h5 font-weight-medium">
              {{ $t('text.payment.with.modal.iframe') }}
            </h4>
          </v-card-item>
          <v-card-text class="pa-0 pt-1  d-flex flex-column align-start justify-space-between">
            <p class="text-body-1">{{ $t('text.payment.with.modal.iframe.description') }}</p>
            <v-btn :to="{ name: RouteName.Products, query: { mode: PaymentMode.ModalIframe } }" variant="flat"
              class="mt-6 text-white" color="primary">
              {{ $t('action.try.it.out') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-card elevation="10" class="overflow-hidden  d-flex flex-column  h-100 pa-6">
          <v-card-item class="pa-0 pb-1">
            <h4 class="text-h5 font-weight-medium">
              {{ $t('text.payment.with.built.in.iframe') }}
            </h4>
          </v-card-item>
          <v-card-text class="pa-0 pt-1  d-flex flex-column align-start justify-space-between">
            <p class="text-body-1">{{ $t('text.payment.with.built.in.iframe.description') }}</p>
            <v-btn :to="{ name: RouteName.Products, query: { mode: PaymentMode.BuiltInIframe } }" variant="flat"
              class="mt-6 text-white" color="primary">
              {{ $t('action.try.it.out') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-card elevation="10" class="overflow-hidden d-flex flex-column h-100 pa-6">
          <v-card-item class="pa-0 pb-1">
            <h4 class="text-h5 font-weight-medium">
              {{ $t('text.payment.by.bank') }}
            </h4>
          </v-card-item>
          <v-card-text class="pa-0 pt-1 d-flex flex-column align-start justify-space-between">
            <p class="text-body-1">{{ $t('text.payment.by.bank.description') }}</p>
            <v-btn :to="{ name: RouteName.Products, query: { mode: PaymentMode.PayByBank } }" variant="flat"
              class="mt-6 text-white" color="primary">
              {{ $t('action.try.it.out') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" offset-sm="3" offset-lg="0" sm="6" lg="4">
        <v-card elevation="10" class="overflow-hidden  d-flex flex-column  h-100 pa-6">
          <v-card-item class="pa-0 pb-1">
            <h4 class="text-h5 font-weight-medium">
              {{ $t('text.payment.with.manual.params') }}
            </h4>
          </v-card-item>
          <v-card-text class="pa-0 pt-1  d-flex flex-column align-start justify-space-between">
            <p class="text-body-1">{{ $t('text.payment.with.manual.params.description') }}</p>
            <v-btn :to="{ name: RouteName.Products, query: { mode: PaymentMode.Manual } }" variant="flat"
              class="mt-6 text-white" color="primary">
              {{ $t('action.try.it.out') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.payments-container {
  max-width: 910px;
}
</style>