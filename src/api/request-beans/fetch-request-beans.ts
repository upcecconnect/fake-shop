import { PaymentMode } from '@/enums/PaymentMode';
import { RequestBean } from '@/types/RequestBean';
import { getUniqueId } from '@/utils/getUniqueId';
import { Storage } from '@/utils/Storage';

const getRequestBeansDefault = (): readonly RequestBean[] => {
  const testData1: RequestBean = {
    altCurrencyNumericCode: '840',
    altFeeCents: 11,
    altTotalAmountCents: 101,
    currencyNumericCode: '980',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: 0,
    description: '',
    feeCents: 10,
    id: getUniqueId(),
    label: 'TEST FORM #1',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'Signature',
    merchantTerminalId: 'E7881545',
    mode: PaymentMode.Redirect,
    orderId: Date.now().toString(),
    purchaseTime: '20241210125959',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  const testData2: RequestBean = {
    altCurrencyNumericCode: '840',
    altFeeCents: 100,
    altTotalAmountCents: 100,
    currencyNumericCode: '980',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: 0,
    description: 'Description',
    feeCents: 10,
    id: getUniqueId(),
    label: 'Custom form №2',
    locale: 'en',
    merchantId: '1753545',
    merchantSignature: 'merchantSignature',
    merchantTerminalId: 'E7881545',
    mode: PaymentMode.ModalIframe,
    orderId: Date.now().toString(),
    purchaseTime: '20241210125959',
    token: '',
    totalAmountCents: 100,
    url: 'https://ecg.test.upc.ua/go/pay',
  };
  return [testData1, testData2];
};

export const fetchRequestBeans = (): readonly RequestBean[] => {
  const values = Storage.requestBeans.getValue();
  if (values.length) {
    return values;
  }
  const valuesDefault = getRequestBeansDefault();
  Storage.requestBeans.setValue(valuesDefault);
  return valuesDefault;
};