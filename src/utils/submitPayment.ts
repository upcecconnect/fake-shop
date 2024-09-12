import { useCartStore } from '@/stores/useCartStore';
import { PaymentMode } from '@/types/PaymentMode';
import { storeToRefs } from 'pinia';
import { PaymentIframeCallbackData } from './npm-lib';
import { UpcPayment } from './npm-lib';
import { RequestEntity } from '@/types/RequestEntity';

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
    const iframe = document.querySelector('#upc-payment-iframe') as HTMLDivElement|null;
    if (iframe) {
      iframe.style.height = `${height + 40}px`;
    }
  }
}

export const submitPayment = (mode: PaymentMode, requestEntity?: RequestEntity) => {
  const cartStore = useCartStore();
  const { billingAddress, total } = storeToRefs(cartStore);
  const merchant = {
    id: '1753545',
    terminalId: 'E7881545',
    signature: 'Signature',
  }

  const currencyNumericCode = '980';
  if (mode === PaymentMode.Redirect) {
    const payment = new UpcPayment({
      merchant,
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
      description: 'Payment description',
      orderId: Date.now().toString(),
      purchaseTime: Date.now(),
      totalAmountCents: total.value,
    })
  }

  if (mode === PaymentMode.BuiltInIframe) {
    const payment = new UpcPayment({
      mode: 'PaymentIframe',
      merchant,
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
      description: 'Payment description',
      orderId: Date.now().toString(),
      purchaseTime: Date.now(),
      totalAmountCents: total.value,
    })
  }

  if (mode === PaymentMode.ModalIframe) {
    const payment = new UpcPayment({
      mode: 'PaymentModalIframe',
      merchant,
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
      description: 'Payment description',
      orderId: Date.now().toString(),
      purchaseTime: Date.now(),
      totalAmountCents: total.value,
    })
  }

  if (mode === PaymentMode.Manual && requestEntity) {
    console.log('requestEntity', requestEntity);
    const payment = new UpcPayment({
      mode: requestEntity.mode,
      merchant: {
        id: requestEntity.merchantId || merchant.id,
        terminalId: requestEntity.merchantTerminalId || merchant.terminalId,
        signature: requestEntity.merchantSignature || merchant.signature,
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
      purchaseTime: requestEntity.purchaseTime || Date.now(),
      token: requestEntity.token || '',
      totalAmountCents: getNumberOrUndefined(requestEntity.totalAmountCents) || total.value,
      url: requestEntity.url || '',
    })
  }
}