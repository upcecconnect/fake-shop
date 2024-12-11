import { NUPCPayByBank } from '@/types/pay-by-bank';
import { defineStore } from 'pinia';

export const usePayByBankBankStore = defineStore({
  id: 'pay-by-bank',
  state: () => ({
    buttonVariant: 'primary' as NUPCPayByBank.Variant,
    buttonLocale: 'en' as NUPCPayByBank.Locale,
    buttonWrapperSelector: '#pay-by-bank',
    paymentMode: 'redirect' as NUPCPayByBank.PaymentMode,
    creditorIBAN: 'UA573220000000026007233566001' as NUPCPayByBank.PaymentProps['creditorIBAN'],
    currencyNumericCode: '980' as NUPCPayByBank.PaymentProps['currencyNumericCode'],
    locale: 'en' as NUPCPayByBank.PaymentProps['locale'],
    merchantID: '1753545' as NUPCPayByBank.PaymentProps['merchantID'],
    orderId: Date.now().toString() as NUPCPayByBank.PaymentProps['orderId'],
    purchaseDescription: 'description' as NUPCPayByBank.PaymentProps['purchaseDescription'],
    purchaseTime: '2412111356' as NUPCPayByBank.PaymentProps['purchaseTime'],
    sessionData: 'some-session-data' as NUPCPayByBank.PaymentProps['sessionData'],
    signature: 'signature' as NUPCPayByBank.PaymentProps['signature'],
    totalAmountCents: 12345 as NUPCPayByBank.PaymentProps['totalAmountCents'],
    url: '' as NUPCPayByBank.PaymentProps['url'],
  }),
});
