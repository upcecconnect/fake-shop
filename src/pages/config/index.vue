<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { PaymentMode } from '@/types/PaymentMode';



</script>

<template>
  <v-row class="py-6">
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-secondary'">
          <h4 class="text-h6">Payment with redirect</h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Redirect to payment page on checkout</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.Redirect } }"
            variant="flat"
            class="mt-4 text-white"
            color="secondary"
          >
            SHOW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-primary'">
          <h4 class="text-h6">Payment with built-in iframe</h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Show built-in payment iframe on checkout page</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.BuiltInIframe } }"
            variant="flat"
            class="mt-4 text-white"
            color="primary"
          >
            SHOW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-info'">
          <h4 class="text-h6">Payment with modal iframe</h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Show modal payment iframe on checkout page</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.ModalIframe } }"
            variant="flat"
            class="mt-4 text-white"
            color="info"
          >
            SHOW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-warning'">
          <h4 class="text-h6">Payment with manual params (development purpose only)</h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">Set all available payment parameters on checkout</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.Manual } }"
            variant="flat"
            class="mt-4 text-white"
            color="warning"
          >
            SHOW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>