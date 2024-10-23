import { useCartStore } from '@/stores/useCartStore';
import { PaymentMode } from '@/types/PaymentMode';
import { storeToRefs } from 'pinia';
import { PaymentIframeCallbackData } from 'upc-payment-js';
import { UpcPayment } from 'upc-payment-js';
import { merchantData } from '@/static/merchantData';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { getPurchaseTime } from './getPurchaseTime';

const iframeCallback = (callbackData: PaymentIframeCallbackData, mode: PaymentMode) => {
  const { data: { height } } = callbackData;
  if (mode === PaymentMode.BuiltInIframe) {
    const wrapper = document.querySelector('#payment-wrapper') as HTMLDivElement|null;
    if (wrapper) {
      wrapper.style.height = `${height + 40}px`;
    }
    return;
  }
  if (mode === PaymentMode.ModalIframe) {
    const wrapper = document.querySelector('#payment-wrapper') as HTMLDivElement|null;
    if (wrapper) {
      wrapper.style.height = 'auto'
    }
    const iframe = document.querySelector('#upc-payment-iframe') as HTMLDivElement|null;
    if (iframe) {
      iframe.style.height = `${height + 40}px`;
    }
  }
}

export const submitPaymentBuiltIn = () => {
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);

  const payment = new UpcPayment({
    mode: 'PaymentIframe',
    merchant: merchantData,
    customer: {
      email: billingAddress.value?.email ?? '',
      firstName: billingAddress.value?.firstName ?? '',
      lastName: billingAddress.value?.lastName ?? '',
      phoneCountryCode: billingAddress.value?.phoneCode ?? '',
      phoneNumber: billingAddress.value?.phone ?? '',
    },
    iframeProps: {
      wrapperSelector: '#payment-wrapper',
      callback: (data) => iframeCallback(data, PaymentMode.BuiltInIframe),
    },
  });

  payment.pay({
    currencyNumericCode,
    description: paymentDescription.value,
    orderId: Date.now().toString(),
    purchaseTime: getPurchaseTime(),
    totalAmountCents: total.value,
  })
}