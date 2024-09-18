<script setup lang="ts">
import { PropType } from 'vue';
import { ref } from 'vue';
import OrderSummary from './OrderSummary.vue';
import { useCartStore } from '@/stores/useCartStore';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { PaymentMode } from '@/types/PaymentMode';
import ManualRequest from './ManualRequest.vue';
import { rules } from '@/utils/rules';

defineProps({
  mode: {
    type: String as PropType<PaymentMode>,
    required: false,
    default: PaymentMode.Redirect,
  },
});

const getSavedBillingAddress = () => {
  const defaultAddress = {
    building: 'B-11',
    city: 'Kyiv',
    country: 'Ukraine',
    destination: 'Office',
    email: '',
    firstName: 'John',
    id: 1,
    label: 'Home',
    lastName: 'Doe',
    phone: '',
    phoneCode: '',
    street: 'Gareth Jones 8',
  };
  const savedBillingAddress = localStorage.getItem('billingAddress');
  if (savedBillingAddress) {
    try {
      return JSON.parse(savedBillingAddress);
    } catch (e) {
      return defaultAddress;
    }
  }
  return defaultAddress
};

const form = ref<VForm|null>(null);
const cartStore = useCartStore();

cartStore.$patch({
  billingAddress: getSavedBillingAddress(),
})

const billingAddress = ref(getSavedBillingAddress());

const isEditing = ref(false);

const onEdit = () => {
  isEditing.value = true;
  cartStore.$patch({
    billingAddress: null,
  })
};

const onCancel = () => {
  isEditing.value = false;
  billingAddress.value = getSavedBillingAddress();
  cartStore.$patch({
    billingAddress: getSavedBillingAddress(),
  })
};

const onSubmit = async () => {
  const vForm = (form.value as VForm);
  const { valid } = await vForm.validate();
  if(!valid) {
    return;
  }
  isEditing.value = false;
  try {
    localStorage.setItem('billingAddress', JSON.stringify(billingAddress.value));
  } catch (e) {
    console.error(e);
    localStorage.setItem('billingAddress', JSON.stringify(getSavedBillingAddress()));
  }
  cartStore.$patch({
    billingAddress: billingAddress.value,
  })
};
</script>

<template>
  <v-row>
    <v-col cols="12">
      <template v-if="mode === PaymentMode.Manual">
        <ManualRequest />
      </template>
      <template v-else>
        <div class="d-flex align-center my-5">
          <h4 class="text-h5">Billing Address</h4>
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
                    hide-details="auto"
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
                    hide-details="auto" 
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
                    hide-details="auto" 
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
                    hide-details="auto"
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
                    hide-details="auto"
                  />
                </v-col>
                <v-col cols="12" lg="12">
                  <v-text-field 
                    v-model="billingAddress.building"
                    :color="billingAddress.building.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    :rules="[rules.required, rules.minLength(2)]"
                    label="Building No" hide-details="auto"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field 
                    v-model="billingAddress.phoneCode"
                    :color="billingAddress.phoneCode.length > 2 ? 'success' : 'primary'"
                    :readonly="!isEditing"
                    hide-details="auto"
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
                    hide-details="auto"
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
                    hide-details="auto"
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
                    Cancel
                  </v-btn>
                  <v-btn color="primary" type="submit" variant="outlined">Confirm</v-btn>
                </v-col>
                <v-col v-else cols="12" lg="12" class="text-right">
                  <v-btn color="primary" type="button" variant="outlined" @click="onEdit">Edit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </template>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6" id="payment-wrapper"></v-col>
    <v-col cols="12" lg="6">
      <OrderSummary />
    </v-col>
  </v-row>
</template>
