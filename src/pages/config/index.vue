<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { PaymentMode } from '@/enums/PaymentMode';
import { IconCornerUpRightDouble } from '@tabler/icons-vue';
import { IconWall } from '@tabler/icons-vue';
import { IconAppWindow } from '@tabler/icons-vue';
import { IconBuildingBank } from '@tabler/icons-vue';
import { IconCode } from '@tabler/icons-vue';
</script>

<template>
  <v-row class="py-6">
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-primary'">
          <h4 class="text-h6 d-flex align-center">
            <IconCornerUpRightDouble class="mr-4" />
            <span>{{ $t('text.payment.with.redirect') }}</span>
          </h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">{{  $t('text.payment.with.redirect.description') }}</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.Redirect } }"
            variant="flat"
            class="mt-4 text-white"
            color="primary"
          >
            {{ $t('action.try.it.out') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-primary'">
          <h4 class="text-h6 d-flex align-center">
            <IconWall class="mr-4" />
            <span>{{ $t('text.payment.with.built.in.iframe') }}</span>
          </h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">{{  $t('text.payment.with.built.in.iframe.description') }}</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.BuiltInIframe } }"
            variant="flat"
            class="mt-4 text-white"
            color="primary"
          >
            {{ $t('action.try.it.out') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-primary'">
          <h4 class="text-h6 d-flex align-center">
            <IconAppWindow class="mr-4" />
            <span>{{ $t('text.payment.with.modal.iframe') }}</span>
          </h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">{{ $t('text.payment.with.modal.iframe.description') }}</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.ModalIframe } }"
            variant="flat"
            class="mt-4 text-white"
            color="primary"
          >
            {{ $t('action.try.it.out') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-primary'">
          <h4 class="text-h6 d-flex align-center">
            <IconBuildingBank class="mr-4" />
            <span>{{ $t('text.payment.by.bank') }}</span>
          </h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">{{ $t('text.payment.by.bank.description') }}</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.PayByBank } }"
            variant="flat"
            class="mt-4 text-white"
            color="primary"
          >
            {{ $t('action.try.it.out') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card elevation="10" class="overflow-hidden">
        <v-card-item :class="'py-4 px-6 text-white bg-error'">
          <h4 class="text-h6 d-flex align-center">
            <IconCode class="mr-4" />
            <span>{{ $t('text.payment.with.manual.params') }}</span>
          </h4>
        </v-card-item>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">{{ $t('text.payment.with.manual.params.description') }}</h5>
          <v-btn
            :to="{ name: RouteName.Products, query: { mode: PaymentMode.Manual } }"
            variant="flat"
            class="mt-4 text-white"
            color="error"
          >
            {{ $t('action.try.it.out') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>