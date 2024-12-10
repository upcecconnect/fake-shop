import { useCartStore } from '@/stores/useCartStore';
import { PaymentMode } from '@/enums/PaymentMode';
import { storeToRefs } from 'pinia';
import { PaymentIframeCallbackData } from 'upc-payment-js';
import { UpcPayment } from 'upc-payment-js';
import { currencyNumericCode } from '@/static/currencyNumericCode';
import { getPurchaseTime } from './getPurchaseTime';
import { merchantData } from '@/static/merchantData';
import { RequestBean } from '@/types/RequestBean';

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

const getUPCPaymentModeFromRequestBean = (requestBean: RequestBean): UpcPayment['mode'] => {
  switch (requestBean.mode) {
    case PaymentMode.BuiltInIframe:
      return 'PaymentIframe' 
    case PaymentMode.ModalIframe:
      return 'PaymentModalIframe';
    default:
      return 'PaymentPage';
  }
}

export const submitPaymentManual = (requestBean: RequestBean) => {
  const cartStore = useCartStore();
  const { total } = storeToRefs(cartStore);
  const mode = getUPCPaymentModeFromRequestBean(requestBean);
  const payment = new UpcPayment({
    mode,
    merchant: {
      id: requestBean.merchantId || merchantData.id,
      terminalId: requestBean.merchantTerminalId || merchantData.terminalId,
      signature: requestBean.merchantSignature || merchantData.signature,
    },
    customer: {
      email: requestBean.customerEmail || undefined,
      firstName: requestBean.customerFirstName || undefined,
      lastName: requestBean.customerLastName || undefined,
      phoneCountryCode: requestBean.customerPhoneCode || undefined,
      phoneNumber: requestBean.customerPhone || undefined,
    },
    iframeProps: {
      wrapperSelector: '#payment-wrapper',
      callback: (data) => iframeCallback(data, mode === 'PaymentIframe'? PaymentMode.BuiltInIframe : PaymentMode.ModalIframe),
    },
  });
    payment.pay({
      altCurrencyNumericCode: requestBean.altCurrencyNumericCode || undefined,
      altFeeCents: getNumberOrUndefined(requestBean.altFeeCents) || undefined,
      altTotalAmountCents: getNumberOrUndefined(requestBean.altTotalAmountCents) || undefined,
      currencyNumericCode: requestBean.currencyNumericCode || currencyNumericCode,
      delay: getNumberOrUndefined(requestBean.delay) || undefined,
      description: requestBean.description || 'Payment description',
      feeCents: getNumberOrUndefined(requestBean.feeCents) || undefined,
      locale: requestBean.locale || 'en',
      orderId: requestBean.orderId || Date.now().toString(),
      purchaseTime: requestBean.purchaseTime || getPurchaseTime(),
      token: requestBean.token || '',
      totalAmountCents: getNumberOrUndefined(requestBean.totalAmountCents) || total.value,
      url: requestBean.url || '',
    })
}