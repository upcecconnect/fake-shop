<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { rules } from '@/utils/rules';
import { IconChevronLeft } from '@tabler/icons-vue';
import { IconChevronRight } from '@tabler/icons-vue';
import { submitPaymentManual } from '@/utils/submitPayment/submitPaymentManual';
import { useDisplay } from 'vuetify'
import { RequestBean } from '@/types/RequestBean';
import { fetchRequestBeans } from '@/api/request-beans/fetch-request-beans';
import { deleteRequestBean } from '@/api/request-beans/delete-request-bean';
import { createRequestBean } from '@/api/request-beans/create-request-bean';
import { updateRequestBean } from '@/api/request-beans/update-request-bean';
import { useI18n } from 'vue-i18n';
import { PaymentMode } from '@/enums/PaymentMode';

const { smAndDown } = useDisplay();
const paramsFormElement = ref<VForm|null>(null);
const isEditing = ref(false);

const { t } = useI18n();
const items = ref<readonly RequestBean[]>([]);
const currentRequestBean = ref<RequestBean|null>(null);

const paymentModes = computed(() => {
  return [
    {
      title: t('label.payment.with.redirect'),
      value: PaymentMode.Redirect,
    },
    {
      title: t('label.payment.with.modal.iframe'),
      value: PaymentMode.ModalIframe,
    },
    {
      title: t('label.payment.with.built.in.iframe'),
      value: PaymentMode.BuiltInIframe,
    }
  ]
})

const switchRequestBean = (next=true) => {
  const currentIndex = items.value.findIndex((item) => item.id === currentRequestBean.value?.id);
  if (next) {
    if (currentIndex === items.value.length - 1) {
      currentRequestBean.value = { ...items.value[0] };
    } else {
      currentRequestBean.value = { ...items.value[currentIndex + 1] };
    }
  } else {
    if (currentIndex === 0) {
      currentRequestBean.value = { ...items.value[items.value.length - 1] };
    } else {
      currentRequestBean.value = { ...items.value[currentIndex - 1] };
    }
  }
};

const onCancel = () => {
  isEditing.value = false;
  const itemIndex = items.value.findIndex((item) => item.id === currentRequestBean.value?.id);
  if (itemIndex === -1) {
    currentRequestBean.value = { ...items.value[0] };
    return;
  }
  currentRequestBean.value = { ...items.value[itemIndex] };
};

const addNewItem = () => {
  currentRequestBean.value = createRequestBean();
  isEditing.value = true;
}

const removeItem = () => {
  if (!currentRequestBean.value) {
    return;
  }
  const itemIndex = items.value.findIndex((item) => item.id === currentRequestBean.value?.id);
  if (itemIndex === -1) {
    return;
  }
  const requestBeans = deleteRequestBean(currentRequestBean.value.id);
  if (requestBeans.length === 0) {
    currentRequestBean.value = null;
    return;
  }
  currentRequestBean.value = { ...requestBeans[0] };
};

const onSaveRequestItem = async () => {
  const vForm = (paramsFormElement.value as VForm);
  const { valid } = await vForm.validate();
  if(!valid) {
    return;
  }
  isEditing.value = false;
  const value = currentRequestBean.value;
  if (!value) {
    return;
  }
  items.value = updateRequestBean(value);
};

const submitPaymentWithManualParams = () => {
  if (isEditing.value) {
    return;
  }
  if (!currentRequestBean.value) {
    return;
  }
  submitPaymentManual(currentRequestBean.value);
};

const isSwitchBackDisabled = computed(() => {
  return items.value.length === 1 || isEditing.value || !currentRequestBean.value || currentRequestBean.value.id === items.value[0].id;
});

const isSwitchForwardDisabled = computed(() => {
  return items.value.length === 1 || isEditing.value || !currentRequestBean.value || currentRequestBean.value.id === items.value[items.value.length - 1].id;
});

const updateOrderId = () => {
  if (!currentRequestBean.value) {
    return;
  }
  currentRequestBean.value = {
    ...currentRequestBean.value,
    orderId: Date.now().toString(),
  };
};

onMounted(() => {
  items.value = fetchRequestBeans();
  currentRequestBean.value = { ...items.value[0] };
})
</script>

<template>
  <v-row>
    <v-col cols=12>
      <div 
        class="d-flex align-center justify-space-between mb-5"
        :class="{ 'flex-column': smAndDown, 'text-center': smAndDown }"
      >
        <div :class="{ 'mb-5': smAndDown }">
          <v-btn
            size="small"
            color="primary"
            type="button"
            variant="outlined"
            icon
            :title="$t('title.previous.form')"
            class="mr-5"
            :disabled="isSwitchBackDisabled"
            @click="switchRequestBean(false)"
          >
            <IconChevronLeft size="24" />
          </v-btn>

          <v-btn
            size="small"
            color="primary"
            type="button"
            variant="outlined"
            icon
            :title="$t('title.next.form')"
            :disabled="isSwitchForwardDisabled"
            @click="switchRequestBean"
          >
            <IconChevronRight size="24" />
          </v-btn>
        </div>
        <h4 class="text-h5 text-center">{{ $t('text.manual.request.params.form') }}</h4>
        <div>
          <v-btn
            class="mr-4"
            color="primary"
            type="button"
            variant="outlined"
            :disabled="isEditing"
            @click="addNewItem"
          >
            {{ $t('action.add.new.form') }}
          </v-btn>
          <v-btn
            color="error"
            type="button"
            variant="outlined"
            :disabled="isEditing || items.length === 1"
            @click="removeItem"
          >
            {{ $t('action.remove.form') }}
          </v-btn>
        </div>
      </div>
      <v-form
        v-if="currentRequestBean"
        ref="paramsFormElement"
        @submit.prevent="onSaveRequestItem"
      >
        <h3 class="text-h5 my-3 text-left">{{ $t('text.form.params') }}</h3>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="currentRequestBean.label"
              :readonly="!isEditing"
              :rules="[rules.required]"
              :label="$t('label.form.name')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="currentRequestBean.url"
              :readonly="!isEditing"
              :label="$t('label.request.url')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="currentRequestBean.mode"
              :readonly="!isEditing"
              :rules="[rules.required]"
              :items="paymentModes"
              :label="$t('label.payment.mode')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.merchant') }}</h3>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="currentRequestBean.merchantId"
              :readonly="!isEditing"
              :rules="[rules.required]"
              :label="$t('label.merchant.id')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
              v-model="currentRequestBean.merchantTerminalId"
              :readonly="!isEditing"
              :rules="[rules.required]"
              :label="$t('label.terminal.id')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="d-flex align-center">
              <v-text-field 
                v-model="currentRequestBean.orderId"
                :readonly="!isEditing"
                :label="$t('label.order.id')"
                variant="outlined"
                class="mr-2"
              />
              <v-btn
                color="primary"
                type="button"
                variant="outlined"
                @click="updateOrderId"
              >
                {{ $t('action.update.order.id') }}
              </v-btn>
            </div>

          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.currency') }}</h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.currencyNumericCode"
              :readonly="!isEditing"
              :label="$t('label.currency.numeric.code')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.altCurrencyNumericCode"
              :readonly="!isEditing"
              :label="$t('label.currency.numeric.code.alternative')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.fee') }}</h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.feeCents"
              :readonly="!isEditing"
              :label="$t('label.fee.cents')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.altFeeCents"
              :readonly="!isEditing"
              :label="$t('label.alternative.fee.cents')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.total.amount') }}</h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.totalAmountCents"
              :readonly="!isEditing"
              :label="$t('label.total.amount.cents')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field 
              v-model="currentRequestBean.altTotalAmountCents"
              :readonly="!isEditing"
              :label="$t('label.alternative.total.amount.cents')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.customer.data') }}</h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.customerPhoneCode"
              :readonly="!isEditing"
              :label="$t('label.customer.phone.code')"
              variant="outlined"
              placeholder="380"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.customerPhone"
              :readonly="!isEditing"
              :label="$t('label.customer.phone.number')"
              variant="outlined"
              placeholder="000000000"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.customerFirstName"
              :readonly="!isEditing"
              :label="$t('label.customer.first.name')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.customerLastName"
              :readonly="!isEditing"
              :label="$t('label.customer.last.name')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.customerEmail"
              :readonly="!isEditing"
              :label="$t('label.customer.email')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <h3 class="text-h5 my-3 text-left">{{ $t('text.other.params') }}</h3>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.locale"
              :readonly="!isEditing"
              :label="$t('label.locale')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.purchaseTime"
              :readonly="!isEditing"
              :label="$t('label.purchase.time')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.delay"
              :readonly="!isEditing"
              :label="$t('label.delay')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.description"
              :readonly="!isEditing"
              :label="$t('label.purchase.description')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.token"
              :readonly="!isEditing"
              :label="$t('label.payment.token')"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field 
              v-model="currentRequestBean.merchantSignature"
              :readonly="!isEditing"
              :label="$t('label.signature')"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="isEditing" cols="12" lg="12" class="text-center">
            <v-btn
              class="mr-4"
              color="error"
              type="button"
              variant="outlined"
              @click="onCancel"
            >
              {{ $t('action.cancel') }}
            </v-btn>
            <v-btn
              color="primary"
              type="submit"
              variant="outlined"
            >
              {{ $t('action.save.changes') }}
            </v-btn>
          </v-col>
          <v-col v-else cols="12" lg="12">
            <div class="d-flex justify-center">
              <v-btn
                color="primary"
                type="button"
                variant="outlined"
                @click="isEditing = true"
              >
                {{ $t('action.edit') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-btn
          v-if="!isEditing"
          color="primary"
          type="button"
          class="d-block ml-auto mt-5"
          @click="submitPaymentWithManualParams"
        >
          {{ $t('action.make.payment') }}
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
