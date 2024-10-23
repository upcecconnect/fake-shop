import { merchantData } from '@/static/merchantData';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { useCartStore } from '@/stores/useCartStore';
import { PaymentMode } from '@/types/PaymentMode';
import { storeToRefs } from 'pinia';
import { UpcPayment } from 'upc-payment-js';
import { getPurchaseTime } from './getPurchaseTime';
import { iframeCallback } from './iframeCallback';

export const submitPaymentModal = () => {
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);
  const payment = new UpcPayment({
    mode: 'PaymentModalIframe',
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
      callback: (data) => iframeCallback(data, PaymentMode.ModalIframe),
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