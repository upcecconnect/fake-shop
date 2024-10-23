<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { rules } from '@/utils/rules';
import { RequestEntity } from '@/types/RequestEntity';
import { ChevronLeftIcon } from 'vue-tabler-icons';
import { ChevronRightIcon } from 'vue-tabler-icons';
import { submitPaymentManual } from '@/utils/submitPayment/submitPaymentManual';

const paramsFormElement = ref<VForm|null>(null);
const isEditing = ref(false);
const items = ref<readonly RequestEntity[]>([]);
const selectedEntity = ref<RequestEntity|null>(null)

const getUniqueEntityId = () => {
  return Date.now() + Math.floor(Math.random() * 9000) + 1000;
};

const localStorageKey = 'requestEntities-2';

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
    description: '',
    feeCents: 10,
    id: getUniqueEntityId(),
    label: 'Test form №1',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'Signature',
    merchantTerminalId: 'E7881545',
    mode: 'PaymentPage',
    orderId: Date.now().toString(),
    purchaseTime: '',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
    creditorCode: '',
    creditorName: '',
    creditorIBAN: '',
  };
  const testData2: RequestEntity = {
    altCurrencyNumericCode: '840',
    altFeeCents: 100,
    altTotalAmountCents: 100,
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
    label: 'Custom form №2',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'merchantSignature',
    merchantTerminalId: 'E7881545',
    mode: 'PaymentIframe',
    orderId: Date.now().toString(),
    purchaseTime: '',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
    creditorCode: '',
    creditorName: '',
    creditorIBAN: '',
  };
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      return [testData1, testData2];
    }
  }
  return [testData1, testData2];
};

const initPayByBank = () => {
  const data = selectedEntity.value;
  if (!data) {
    return
  }
  if (!window.UpcPayByBank) {
    return;
  }
  const upcPayByBank = new window.UpcPayByBank({
    merchant: {
      id: data?.merchantId || '',
      terminalId: data?.merchantTerminalId || '',
      signature: data?.merchantSignature || '',
      creditorCode: data.creditorCode || 'creditorCode',
      creditorName: data.creditorName || 'creditorName',
      creditorIBAN: data.creditorIBAN || 'creditorIBAN',
    },
    customer: {
      email: '',
      firstName: '',
      lastName: '',
      phoneCountryCode: '',
      phoneNumber: '',
    },
    buttonProps: {
      locale: data.locale,
      wrapperSelector: '#pay-by-bank',
    },
  });
  upcPayByBank.addButton({
    currencyNumericCode: data.currencyNumericCode,
    description: data.description || 'description',
    orderId: data.orderId,
    purchaseTime: data.purchaseTime || 'purchaseTime',
    totalAmountCents: data.totalAmountCents,
    url: data.url,
  });
}

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
    purchaseTime: value.purchaseTime || '',
    token: value.token || '',
    totalAmountCents: value.totalAmountCents || 0,
    url: value.url || 'https://ecg.test.upc.ua/go/pay',
    creditorCode: value.creditorCode || '',
    creditorName: value.creditorName || '',
    creditorIBAN: value.creditorIBAN || '',
  };
  const itemIndex = items.value.findIndex((item) => item.id === itemToSave.id);
  if (itemIndex === -1) {
    items.value = [...items.value, itemToSave];
  } else {
    items.value = items.value.map((item) => item.id === itemToSave.id ? itemToSave : item);
  }
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(items.value));
  } catch (e) {
    console.error(e);
  }
  const payByBankContainer = document.getElementById('pay-by-bank');
  if (!payByBankContainer) {
    return;
  }
  payByBankContainer.innerHTML = '';
  initPayByBank();
};

onMounted(() => {
  items.value = getSavedRequestEntities();
  selectedEntity.value = { ...items.value[0] };
  initPayByBank();
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
    purchaseTime: '',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
    creditorCode: '',
    creditorName: '',
    creditorIBAN: '',
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
    localStorage.setItem(localStorageKey, JSON.stringify(items.value));
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
  submitPaymentManual(selectedEntity.value);
};
</script>

<template>
  <v-row>
    <v-col cols=12>
      <h4 class="text-h5 my-5 text-center">MANUAL REQUEST PARAMS FORM</h4>

      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between mb-4">
            <div>
              <v-btn
                size="small"
                color="primary"
                type="button"
                variant="outlined"
                icon
                class="mr-5"
                :disabled="isEditing"
                @click="switchEntity(false)"
              >
                <ChevronLeftIcon size="24" />
              </v-btn>

              <v-btn
                size="small"
                color="primary"
                type="button"
                variant="outlined"
                icon
                :disabled="isEditing"
                @click="switchEntity"
              >
                <ChevronRightIcon size="24" />
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
                Add new form
              </v-btn>
              <v-btn
                color="error"
                type="button"
                variant="outlined"
                :disabled="isEditing || items.length === 1"
                @click="removeItem"
              >
                Remove form
              </v-btn>
            </div>
          </div>
          <v-row>
            <v-col v-if="selectedEntity" cols="4" class="mx-auto">
              <v-form
                ref="paramsFormElement"
                class="py-3"
                @submit.prevent="onSaveRequestItem"
              > 
               
                <v-text-field
                  v-model="selectedEntity.label"
                  :readonly="!isEditing"
                  :rules="[rules.required]"
                  hide-details="auto"
                  label="Label"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.url"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Url"
                  variant="outlined"
                  class="mb-4"
                />
                <v-select
                  v-model="selectedEntity.mode"
                  :readonly="!isEditing"
                  :rules="[rules.required]"
                  hide-details="auto"
                  :items="['PaymentIframe', 'PaymentModalIframe', 'PaymentPage']"
                  label="Mode"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.merchantId"
                  :readonly="!isEditing"
                  :rules="[rules.required]"
                  hide-details="auto"
                  label="Merchant ID"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.merchantTerminalId"
                  :readonly="!isEditing"
                  :rules="[rules.required]"
                  hide-details="auto"
                  label="Terminal ID"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.orderId"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Order ID"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.currencyNumericCode"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Currency numeric code"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.altCurrencyNumericCode"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Alt currency numeric code"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.altFeeCents"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Alt fee cents"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.feeCents"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Fee cents"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.altTotalAmountCents"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Alt total amount cents"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.totalAmountCents"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Total amount cents"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.locale"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Locale"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.purchaseTime"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Purchase Time"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.delay"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Delay"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.description"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Description"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.token"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Token"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.merchantSignature"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Signature"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.customerPhoneCode"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Customer phone code"
                  variant="outlined"
                  placeholder="380"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.customerPhone"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Customer phone number"
                  variant="outlined"
                  placeholder="000000000"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.customerFirstName"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Customer First Name"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.customerLastName"
                  :readonly="!isEditing"
                  hide-details="auto" 
                  label="Last Name"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.customerEmail"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Customer email"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.creditorIBAN"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Creditor IBAN"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.creditorName"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Creditor Name"
                  variant="outlined"
                  class="mb-4"
                />
                <v-text-field 
                  v-model="selectedEntity.creditorCode"
                  :readonly="!isEditing"
                  hide-details="auto"
                  label="Creditor Code"
                  variant="outlined"
                  class="mb-4"
                />
                <v-row>
                  <v-col v-if="isEditing" cols="12" lg="12" class="text-center">
                    <v-btn
                      class="mr-4"
                      color="error"
                      type="button"
                      variant="outlined"
                      @click="onCancel"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="primary"
                      type="submit"
                      variant="outlined"
                    >
                      Save changes
                    </v-btn>
                  </v-col>
                  <v-col v-else cols="12" lg="12">
                    <div class="d-flex justify-center">
                      <v-btn
                        color="primary"
                        type="button"
                        variant="outlined"
                        @click="isEditing = true"
                      >Edit Form</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
              <v-btn
                v-if="!isEditing"
                color="primary"
                type="button"
                class="d-block mx-auto mt-5"
                @click="submitPaymentWithManualParams"
              >
                Make payment
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div id="pay-by-bank" class="d-flex justify-center"></div>
    </v-col>
  </v-row>
</template>
