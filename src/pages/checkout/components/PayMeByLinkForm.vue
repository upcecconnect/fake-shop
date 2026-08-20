<script setup lang="ts">
import { ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { rules } from '@/utils/rules';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { generatePaymentLink } from '@/utils/submitPayment/generatePaymentLink';
import type { PaymentLinkResult } from '@/utils/submitPayment/generatePaymentLink';
import successIcon from '@/assets/images/payme/success.svg';
import errorIcon from '@/assets/images/payme/error.svg';
import calendarIcon from '@/assets/images/payme/calendar.svg';
import checkIcon from '@/assets/images/payme/check.svg';

type Status = 'idle' | 'loading' | 'success' | 'error';

const paramsFormElement = ref<VForm | null>(null);
const dueDateField = ref<ComponentPublicInstance | null>(null);

const openDatePicker = () => {
  const input = dueDateField.value?.$el?.querySelector('input') as HTMLInputElement | null;
  input?.showPicker?.();
};

const recipientCardNumber = ref('');
const currency = ref(currencyNumericCode);
const cardholderName = ref('');
const dueDate = ref('');

const currencies = [
  { title: 'UAH', value: '980' },
  { title: 'USD', value: '840' },
  { title: 'EUR', value: '978' },
];

const status = ref<Status>('idle');
const result = ref<PaymentLinkResult | null>(null);
const copied = ref(false);
let copyTimeout: ReturnType<typeof setTimeout> | undefined;

const onGenerate = async () => {
  const vForm = paramsFormElement.value;
  if (!vForm) {
    return;
  }
  const { valid } = await vForm.validate();
  if (!valid) {
    return;
  }
  status.value = 'loading';
  try {
    result.value = await generatePaymentLink({
      recipientCardNumber: recipientCardNumber.value,
      currency: currency.value,
      cardholderName: cardholderName.value,
      dueDate: dueDate.value,
    });
    status.value = 'success';
  } catch (error) {
    console.error('createPaymentLink failed:', error);
    status.value = 'error';
  }
};

const legacyCopy = (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard?.writeText) {
    legacyCopy(text);
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    legacyCopy(text);
  }
};

const onCopy = async () => {
  if (!result.value) {
    return;
  }
  await copyToClipboard(result.value.url);
  copied.value = true;
  clearTimeout(copyTimeout);
  copyTimeout = setTimeout(() => {
    copied.value = false;
  }, 2000);
};

const onCreateAnother = () => {
  result.value = null;
  copied.value = false;
  status.value = 'idle';
};

const onTryAgain = () => {
  status.value = 'idle';
};
</script>

<template>
  <div class="payme-card">
    <template v-if="status === 'idle' || status === 'loading'">
      <div class="text-center mb-10">
        <h4 class="payme-title">{{ $t('text.generate.payment.link') }}</h4>
        <p class="payme-subtitle mt-3">
          {{ $t('text.generate.payment.link.subtitle') }}
        </p>
      </div>
      <v-form ref="paramsFormElement" @submit.prevent="onGenerate">
        <v-row dense>
          <v-col cols="8">
            <v-text-field
              v-model="recipientCardNumber"
              :label="$t('label.recipient.card.number')"
              :rules="[rules.required, rules.cardNumber]"
              :disabled="status === 'loading'"
              variant="outlined"
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="currency"
              :items="currencies"
              :label="$t('label.currency')"
              :disabled="status === 'loading'"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="cardholderName"
              :label="$t('label.cardholder.name')"
              :rules="[rules.required, rules.fullName]"
              :disabled="status === 'loading'"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              ref="dueDateField"
              v-model="dueDate"
              type="date"
              :label="$t('label.due.date')"
              :rules="[rules.required]"
              :disabled="status === 'loading'"
              variant="outlined"
              class="payme-due-date"
            >
              <template #append-inner>
                <img :src="calendarIcon" alt="" class="payme-cal-icon" @click="openDatePicker" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-btn
          type="submit"
          color="primary"
          size="large"
          rounded="pill"
          block
          class="mt-4 text-white"
          :loading="status === 'loading'"
          :disabled="status === 'loading'"
        >
          {{ $t('action.generate.link') }}
        </v-btn>
      </v-form>
    </template>

    <template v-else-if="status === 'success'">
      <div class="text-center">
        <img :src="successIcon" alt="" class="payme-status-icon mb-4" />
        <h4 class="payme-title">{{ $t('text.link.ready') }}</h4>
        <p class="payme-subtitle mt-2 mb-6">
          {{ $t('text.link.ready.subtitle') }}
        </p>
        <div class="payme-link-field mb-6">
          <span class="payme-link-field__url">{{ result?.url }}</span>
          <button
            type="button"
            class="payme-link-field__copy"
            :class="{ 'payme-link-field__copy--copied': copied }"
            @click="onCopy"
          >
            <span>{{ copied ? $t('action.copied') : $t('action.copy') }}</span>
            <img v-if="copied" :src="checkIcon" alt="" class="payme-check-icon" />
          </button>
        </div>
        <v-btn variant="text" color="primary" class="text-none font-weight-bold" @click="onCreateAnother">
          {{ $t('action.create.another.link') }}
        </v-btn>
      </div>
    </template>

    <template v-else>
      <div class="text-center">
        <img :src="errorIcon" alt="" class="payme-status-icon mb-4" />
        <h4 class="payme-title">{{ $t('text.something.went.wrong') }}</h4>
        <p class="payme-subtitle mt-2 mb-6">
          {{ $t('text.something.went.wrong.subtitle') }}
        </p>
        <v-btn variant="text" color="primary" class="text-none font-weight-bold" @click="onTryAgain">
          {{ $t('action.try.again') }}
        </v-btn>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.payme-card {
  width: 100%;
  max-width: 500px;
  padding: 46px 32px;
  border-radius: 20px;
  background: rgb(var(--v-theme-background));
  box-shadow: 0 8px 30px rgba(16, 24, 40, 0.06);
  font-family: 'Geologica', 'Montserrat', sans-serif;
}

.payme-title {
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  color: #2b2d33;
}

.payme-subtitle {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
  color: #2b2d33;
}

.payme-cal-icon {
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.payme-check-icon {
  width: 18px;
  height: 18px;
}

.payme-status-icon {
  width: 122px;
  height: 116px;
}

.payme-link-field {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background: #f3f3f3;
  box-sizing: border-box;
}

.payme-link-field__url {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: rgb(var(--v-theme-textPrimary));
}

.payme-link-field__copy {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  color: #2272ff;

  &--copied {
    color: #56c39b;
    font-weight: 300;
    cursor: default;
  }
}

.payme-due-date {
  :deep(input[type='date']::-webkit-calendar-picker-indicator) {
    display: none;
  }
}
</style>
