import { useCartStore } from '@/stores/useCartStore';
import { PaymentMode } from '@/types/PaymentMode';
import { storeToRefs } from 'pinia';
import { PaymentIframeCallbackData } from 'upc-payment-js';
import { UpcPayment } from 'upc-payment-js';
import { RequestEntity } from '@/types/RequestEntity';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { getPurchaseTime } from './getPurchaseTime';
import { merchantData } from '@/static/merchantData';

const getNumberOrUndefined = (value: string|number): number|undefined => {
  try {
    if (typeof value === 'string') {
      const numberValue = parseFloat(value);
      if (isNaN(numberValue)) {
        return undefined;
      }
      return numberValue;
    }
    return value;
  } catch (error) {
    return undefined;
  }
}

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

export const submitPaymentManual = (requestEntity: RequestEntity) => {
  const cartStore = useCartStore();
  const { total } = storeToRefs(cartStore);
  const payment = new UpcPayment({
    mode: requestEntity.mode,
    merchant: {
      id: requestEntity.merchantId || merchantData.id,
      terminalId: requestEntity.merchantTerminalId || merchantData.terminalId,
      signature: requestEntity.merchantSignature || merchantData.signature,
    },
    customer: {
      email: requestEntity.customerEmail || undefined,
      firstName: requestEntity.customerFirstName || undefined,
      lastName: requestEntity.customerLastName || undefined,
      phoneCountryCode: requestEntity.customerPhoneCode || undefined,
      phoneNumber: requestEntity.customerPhone || undefined,
    },
    iframeProps: {
      wrapperSelector: '#payment-wrapper',
      callback: (data) => iframeCallback(data, requestEntity.mode === 'PaymentIframe'? PaymentMode.BuiltInIframe : PaymentMode.ModalIframe),
    },
  });
    payment.pay({
      altCurrencyNumericCode: requestEntity.altCurrencyNumericCode || undefined,
      altFeeCents: getNumberOrUndefined(requestEntity.altFeeCents) || undefined,
      altTotalAmountCents: getNumberOrUndefined(requestEntity.altTotalAmountCents) || undefined,
      currencyNumericCode: requestEntity.currencyNumericCode || currencyNumericCode,
      delay: getNumberOrUndefined(requestEntity.delay) || undefined,
      description: requestEntity.description || 'Payment description',
      feeCents: getNumberOrUndefined(requestEntity.feeCents) || undefined,
      locale: requestEntity.locale || 'en',
      orderId: requestEntity.orderId || Date.now().toString(),
      purchaseTime: requestEntity.purchaseTime || getPurchaseTime(),
      token: requestEntity.token || '',
      totalAmountCents: getNumberOrUndefined(requestEntity.totalAmountCents) || total.value,
      url: requestEntity.url || '',
    })
}