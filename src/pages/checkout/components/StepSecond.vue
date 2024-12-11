<script setup lang="ts">
import { PropType } from 'vue';
import { ref } from 'vue';
import OrderSummary from './OrderSummary.vue';
import { useCartStore } from '@/stores/useCartStore';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { PaymentMode } from '@/enums/PaymentMode';
import ManualRequest from './ManualRequest.vue';
import { rules } from '@/utils/rules';
import { fetchBillingAddress } from '@/api/billing-address/fetch-billing-address';
import { updateBillingAddress } from '@/api/billing-address/update-billing-address';
import PayByBankForm from './PayByBankForm.vue';

defineProps({
  mode: {
    type: String as PropType<PaymentMode>,
    required: false,
    default: PaymentMode.Redirect,
  },
});

const form = ref<VForm|null>(null);
const cartStore = useCartStore();
const address = fetchBillingAddress();

cartStore.$patch({
  billingAddress: address,
})

const billingAddress = ref(address);

const isEditing = ref(false);

const onEdit = () => {
  isEditing.value = true;
  cartStore.$patch({
    billingAddress: null,
  })
};

const onCancel = () => {
  isEditing.value = false;
  billingAddress.value = address;
  cartStore.$patch({
    billingAddress: address,
  })
};

const onSubmit = async () => {
  const vForm = (form.value as VForm);
  const { valid } = await vForm.validate();
  if(!valid) {
    return;
  }
  updateBillingAddress(billingAddress.value);
  cartStore.$patch({
    billingAddress: billingAddress.value,
  });
};
</script>

<template>
  <v-row>
    <v-col cols="12" md="6" id="payment-wrapper"></v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <template v-if="mode === PaymentMode.Manual">
        <ManualRequest />
      </template>
      <template v-else-if="mode === PaymentMode.PayByBank">
        <PayByBankForm />
      </template>
      <template v-else>
        <div class="d-flex align-center my-5">
          <h4 class="text-h5">{{ $t('text.billing.address') }}</h4>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-form ref="form" class="py-3" @submit.prevent="onSubmit">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.firstName"
                    :color="billingAddress.label.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                    label="First Name"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.lastName"
                    :color="billingAddress.lastName.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                    label="Last Name"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.country"
                    label="State"
                    variant="outlined"
                    :color="billingAddress.country.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.city"
                    label="City" 
                    variant="outlined"
                    :color="billingAddress.city.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                  />
                </v-col>
                <v-col cols="12" lg="12">
                  <v-text-field 
                    v-model="billingAddress.street"
                    label="Street"
                    variant="outlined"
                    :color="billingAddress.street.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                  />
                </v-col>
                <v-col cols="12" lg="12">
                  <v-text-field 
                    v-model="billingAddress.building"
                    :color="billingAddress.building.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                    label="Building No"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.phoneCode"
                    :color="billingAddress.phoneCode.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    label="Phone code"
                    placeholder="380"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.phone"
                    :color="billingAddress.phone.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    label="Phone number"
                    placeholder="000000000"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field 
                    v-model="billingAddress.email"
                    :color="billingAddress.email.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    label="Email address"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col v-if="isEditing" cols="12" lg="12" class="text-right">
                  <v-btn
                    class="mr-4"
                    color="error"
                    type="button"
                    variant="outlined"
                    @click="onCancel"
                  >
                    {{ $t('action.cancel') }}
                  </v-btn>
                  <v-btn color="primary" type="submit" variant="outlined">{{ $t('action.confirm') }}</v-btn>
                </v-col>
                <v-col v-else cols="12" lg="12" class="text-right">
                  <v-btn color="primary" type="button" variant="outlined" @click="onEdit">{{ $t('action.edit') }}</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col cols="12" lg="6">
            <OrderSummary />
          </v-col>
        </v-row>
      </template>
    </v-col>
  </v-row>
</template>
