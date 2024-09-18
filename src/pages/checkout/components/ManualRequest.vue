<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { rules } from '@/utils/rules';
import { RequestEntity } from '@/types/RequestEntity';
import { submitPayment } from '@/utils/submitPayment';
import { PaymentMode } from '@/types/PaymentMode';

const paramsFormElement = ref<VForm|null>(null);
const isEditing = ref(false);
const items = ref<readonly RequestEntity[]>([]);
const selectedEntity = ref<RequestEntity|null>(null)

const getUniqueEntityId = () => {
  return Date.now() + Math.floor(Math.random() * 9000) + 1000;
};

const getSavedRequestEntities = (): readonly RequestEntity[] => {
  const testData1: RequestEntity = {
    altCurrencyNumericCode: '840',
    altFeeCents: 11,
    altTotalAmountCents: 101,
    currencyNumericCode: '980',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: 0,
    description: 'Description',
    feeCents: 10,
    id: getUniqueEntityId(),
    label: 'Test data 1',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'Signature',
    merchantTerminalId: 'E7881545',
    mode: 'PaymentPage',
    orderId: Date.now().toString(),
    purchaseTime: Date.now(),
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  const testData2: RequestEntity = {
    altCurrencyNumericCode: '840',
    altFeeCents: 11,
    altTotalAmountCents: 101,
    currencyNumericCode: '980',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: 0,
    description: 'Description',
    feeCents: 10,
    id: getUniqueEntityId(),
    label: 'Test data 2',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'Signature',
    merchantTerminalId: 'E7881545',
    mode: 'PaymentIframe',
    orderId: Date.now().toString(),
    purchaseTime: Date.now(),
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  const savedData = localStorage.getItem('requestEntities');
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      return [testData1, testData2];
    }
  }
  return [testData1, testData2];
};


const onSaveRequestItem = async () => {
  const vForm = (paramsFormElement.value as VForm);
  const { valid } = await vForm.validate();
  if(!valid) {
    return;
  }
  isEditing.value = false;
  const value = selectedEntity.value;
  if (!value) {
    return;
  }
  const itemToSave: RequestEntity = { 
    altCurrencyNumericCode: value.altCurrencyNumericCode || '',
    altFeeCents: value.altFeeCents || 0,
    altTotalAmountCents: value.altTotalAmountCents || 0,
    currencyNumericCode: value.currencyNumericCode || '',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: value.delay || 0,
    description: value.description || '',
    feeCents: value.feeCents || 0,
    id: value.id || getUniqueEntityId(),
    label: value.label || '',
    locale: value.locale || '',
    merchantId: value.merchantId || '',
    merchantSignature: value.merchantSignature || '',
    merchantTerminalId: value.merchantTerminalId || '',
    mode: value.mode || 'PaymentPage',
    orderId: value.orderId || Date.now().toString(),
    purchaseTime: value.purchaseTime || Date.now(),
    token: value.token || '',
    totalAmountCents: value.totalAmountCents || 0,
    url: value.url || 'https://ecg.test.upc.ua/go/pay',
  };
  const itemIndex = items.value.findIndex((item) => item.id === itemToSave.id);
  if (itemIndex === -1) {
    items.value = [...items.value, itemToSave];
  } else {
    items.value = items.value.map((item) => item.id === itemToSave.id ? itemToSave : item);
  }
  try {
    localStorage.setItem('requestEntities', JSON.stringify(items.value));
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  items.value = getSavedRequestEntities();
  selectedEntity.value = { ...items.value[0] };
});

const switchEntity = (next=true) => {
  const currentIndex = items.value.findIndex((item) => item.id === selectedEntity.value?.id);
  if (next) {
    if (currentIndex === items.value.length - 1) {
      selectedEntity.value = { ...items.value[0] };
    } else {
      selectedEntity.value = { ...items.value[currentIndex + 1] };
    }
  } else {
    if (currentIndex === 0) {
      selectedEntity.value = { ...items.value[items.value.length - 1] };
    } else {
      selectedEntity.value = { ...items.value[currentIndex - 1] };
    }
  }
};

const onCancel = () => {
  isEditing.value = false;
  const itemIndex = items.value.findIndex((item) => item.id === selectedEntity.value?.id);
  if (itemIndex === -1) {
    selectedEntity.value = { ...items.value[0] };
    return;
  }
  selectedEntity.value = { ...items.value[itemIndex] };
};

const addNewItem = () => {
  selectedEntity.value = {
    altCurrencyNumericCode: '',
    altFeeCents: 0,
    altTotalAmountCents: 0,
    currencyNumericCode: '',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: 0,
    description: '',
    feeCents: 10,
    id: NaN,
    label: '',
    locale: '',
    merchantId: '',
    merchantSignature: '',
    merchantTerminalId: '',
    mode: 'PaymentPage',
    orderId: Date.now().toString(),
    purchaseTime: Date.now(),
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  isEditing.value = true;
}

const removeItem = () => {
  if (!selectedEntity.value) {
    return;
  }
  const itemIndex = items.value.findIndex((item) => item.id === selectedEntity.value?.id);
  if (itemIndex === -1) {
    return;
  }
  items.value = items.value.filter((item) => item.id !== selectedEntity.value?.id);
  try {
    localStorage.setItem('requestEntities', JSON.stringify(items.value));
  } catch (e) {
    console.error(e);
  }
  if (items.value.length === 0) {
    selectedEntity.value = null;
    return;
  }
  selectedEntity.value = { ...items.value[0] };
};

const submitPaymentWithManualParams = () => {
  if (isEditing.value) {
    return;
  }
  if (!selectedEntity.value) {
    return;
  }
  submitPayment(PaymentMode.Manual, selectedEntity.value);
};
</script>

<template>
  <v-row>
    <v-col cols=12>
      <div class="d-flex align-center my-5">
        <h4 class="text-h5">Manual request params</h4>
      </div>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between mb-4">
            <div>
              <v-btn
                color="primary"
                type="button"
                variant="outlined"
                class="mr-5"
                :disabled="isEditing"
                @click="switchEntity(false)"
              >
                Prev
              </v-btn>
              <v-btn
                color="primary"
                type="button"
                variant="outlined"
                :disabled="isEditing"
                @click="switchEntity"
              >
                Next
              </v-btn>
            </div>
            <div>
              <v-btn
                class="mr-4"
                color="primary"
                type="button"
                variant="outlined"
                :disabled="isEditing"
                @click="addNewItem"
              >
                Add new item
              </v-btn>
              <v-btn
                color="error"
                type="button"
                variant="outlined"
                :disabled="isEditing || items.length === 1"
                @click="removeItem"
              >
                Remove item
              </v-btn>
            </div>

          </div>
          <v-row>
            <v-col v-if="selectedEntity" cols="12">
              <v-form
                ref="paramsFormElement"
                class="py-3"
                @submit.prevent="onSaveRequestItem"
              >
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field 
                      v-model="selectedEntity.label"
                      :readonly="!isEditing"
                      :rules="[rules.required]"
                      hide-details="auto"
                      label="Label"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field 
                      v-model="selectedEntity.url"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Url"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedEntity.mode"
                      :readonly="!isEditing"
                      :rules="[rules.required]"
                      hide-details="auto"
                      :items="['PaymentIframe', 'PaymentModalIframe', 'PaymentPage']"
                      label="Mode"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field 
                      v-model="selectedEntity.merchantId"
                      :readonly="!isEditing"
                      :rules="[rules.required]"
                      hide-details="auto"
                      label="Merchant ID"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field 
                      v-model="selectedEntity.merchantTerminalId"
                      :readonly="!isEditing"
                      :rules="[rules.required]"
                      hide-details="auto"
                      label="Terminal ID"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field 
                      v-model="selectedEntity.orderId"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Order ID"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.currencyNumericCode"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Currency numeric code"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.altCurrencyNumericCode"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Alt currency numeric code"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.altFeeCents"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Alt fee cents"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.feeCents"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Fee cents"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.altTotalAmountCents"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Alt total amount cents"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.totalAmountCents"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Total amount cents"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.locale"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Locale"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.purchaseTime"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Purchase Time"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.delay"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Delay"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.description"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Description"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.token"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Token"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.merchantSignature"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Signature"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.customerPhoneCode"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Customer phone code"
                      variant="outlined"
                      placeholder="380"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.customerPhone"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Customer phone number"
                      variant="outlined"
                      placeholder="000000000"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.customerFirstName"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Customer First Name"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.customerLastName"
                      :readonly="!isEditing"
                      hide-details="auto" 
                      label="Last Name"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field 
                      v-model="selectedEntity.customerEmail"
                      :readonly="!isEditing"
                      hide-details="auto"
                      label="Customer email"
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
                  <v-col v-else cols="12" lg="12">
                    <div class="d-flex justify-space-between">
                      <v-btn color="primary" type="button" variant="outlined" @click="isEditing = true">Edit</v-btn>
                      <v-btn
                        v-if="!isEditing"
                        color="primary"
                        type="button"
                        @click="submitPaymentWithManualParams"
                      >
                        Submit payment
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
