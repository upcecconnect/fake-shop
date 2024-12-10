import { PaymentMode } from '@/enums/PaymentMode';

export interface RequestBean {
  readonly altCurrencyNumericCode: string;
  readonly altFeeCents: number;
  readonly altTotalAmountCents: number;
  readonly currencyNumericCode: string;
  readonly customerEmail: string;
  readonly customerFirstName: string;
  readonly customerLastName: string;
  readonly customerPhone: string;
  readonly customerPhoneCode: string;
  readonly delay: number;
  readonly description: string;
  readonly feeCents: number;
  readonly id: number;
  readonly label: string;
  readonly locale: string;
  readonly merchantId: string;
  readonly merchantSignature: string;
  readonly merchantTerminalId: string;
  readonly mode: PaymentMode;
  readonly orderId: string;
  readonly purchaseTime: string;
  readonly token: string;
  readonly totalAmountCents: number;
  readonly url: string;
}
