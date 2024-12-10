import { RequestBean } from '@/types/RequestBean';
import { getUniqueId } from '@/utils/getUniqueId';
import { Storage } from '@/utils/Storage';
import { fetchRequestBeans } from './fetch-request-beans';

export const updateRequestBean = (value: RequestBean): readonly RequestBean[] => {
  const itemToSave: RequestBean = { 
    altCurrencyNumericCode: value.altCurrencyNumericCode || '',
    altFeeCents: value.altFeeCents || 0,
    altTotalAmountCents: value.altTotalAmountCents || 0,
    currencyNumericCode: value.currencyNumericCode || '',
    customerEmail: '',
    customerFirstName: '',
    customerLastName: '',
    customerPhone: '',
    customerPhoneCode: '',
    delay: value.delay || 0,
    description: value.description || '',
    feeCents: value.feeCents || 0,
    id: value.id || getUniqueId(),
    label: value.label || '',
    locale: value.locale || '',
    merchantId: value.merchantId || '',
    merchantSignature: value.merchantSignature || '',
    merchantTerminalId: value.merchantTerminalId || '',
    mode: value.mode || 'PaymentPage',
    orderId: value.orderId || Date.now().toString(),
    purchaseTime: value.purchaseTime || '',
    token: value.token || '',
    totalAmountCents: value.totalAmountCents || 0,
    url: value.url || 'https://ecg.test.upc.ua/go/pay',
  };
  let beans = fetchRequestBeans();
  const itemIndex = beans.findIndex((item) => item.id === itemToSave.id);
  if (itemIndex === -1) {
    beans = [...beans, itemToSave];
  } else {
    beans = beans.map((item) => item.id === itemToSave.id ? itemToSave : item);
  }
  Storage.requestBeans.setValue(beans);
  return beans;
};