import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';
import { UpcPayment } from 'upc-payment-js';
import { merchantData } from '@/static/merchantData';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { getPurchaseTime } from './getPurchaseTime';

export const submitPaymentRedirect = () => {
  const cartStore = useCartStore();
  const { billingAddress, total, paymentDescription } = storeToRefs(cartStore);
  const payment = new UpcPayment({
    merchant: merchantData,
    customer: {
      email: billingAddress.value?.email ?? '',
      firstName: billingAddress.value?.firstName ?? '',
      lastName: billingAddress.value?.lastName ?? '',
      phoneCountryCode: billingAddress.value?.phoneCode ?? '',
      phoneNumber: billingAddress.value?.phone ?? '',
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