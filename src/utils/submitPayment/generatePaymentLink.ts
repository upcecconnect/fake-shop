import { UpcPayment } from 'upc-payment-js';
import { merchantData } from '@/static/merchantData';

const PAYMENT_LINK_ENDPOINT =
  import.meta.env.DEV || import.meta.env.VITE_PAYME_PROXY === 'true'
    ? '/upc/dashboard/api/public/merchant-invoices'
    : 'https://ecg.test.upc.ua/dashboard/api/public/merchant-invoices';

export interface PaymentLinkResult {
  url: string;
}

export interface GeneratePaymentLinkParams {
  recipientCardNumber: string;
  currency: string;
  cardholderName: string;
  dueDate: string;
}

const splitCardholderName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? '',
    lastName: parts[1] ?? '',
    ...(parts.length > 2 ? { middleName: parts.slice(2).join(' ') } : {}),
  };
};

const toYYMM = (isoDate: string): number => {
  const [year, month] = isoDate.split('-');
  return Number(`${year.slice(-2)}${month}`);
};

const generateUuid = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i += 1) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10, 16).join('')}`;
};

export const generatePaymentLink = async (
  params: GeneratePaymentLinkParams,
): Promise<PaymentLinkResult> => {
  const payment = new UpcPayment({ merchant: merchantData });

  return payment.createPaymentByLink({
    currencyCode: params.currency,
    recipientCardNumber: params.recipientCardNumber.replace(/\s/g, ''),
    uuid: generateUuid(),
    recipient: splitCardholderName(params.cardholderName),
    expirationDate: toYYMM(params.dueDate),
    url: PAYMENT_LINK_ENDPOINT,
  });
};
