import { PaymentMode } from '@/enums/PaymentMode';
import { RequestBean } from '@/types/RequestBean';

export const createRequestBean = (): RequestBean => {
  const requestBean: RequestBean = {
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
    mode: PaymentMode.Redirect,
    orderId: Date.now().toString(),
    purchaseTime: '',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  return requestBean;
}
