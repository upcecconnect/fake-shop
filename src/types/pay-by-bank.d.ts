interface MerchantData {
  readonly id: string;
  readonly terminalId: string;
  readonly signature: string;
  readonly creditorIBAN: string;
  readonly creditorName: string;
  readonly creditorCode: string;
}

interface PaymentData {
  readonly altCurrencyNumericCode?: string|undefined;
  readonly altFeeCents?: number|undefined;
  readonly altTotalAmountCents?: number|undefined;
  readonly currencyNumericCode: string;
  readonly delay?: number|undefined;
  readonly description: string;
  readonly feeCents?: number|undefined;
  readonly locale?: string|undefined;
  readonly orderId: string;
  readonly purchaseTime: string;
  readonly token?: string|undefined;
  readonly totalAmountCents: number;
  readonly url?: string|undefined;
}

interface CustomerData {
  readonly email?: string|undefined;
  readonly phoneCountryCode?: string|undefined;
  readonly phoneNumber?: string|undefined;
  readonly firstName?: string|undefined;
  readonly lastName?: string|undefined;
}

interface ButtonProps {
  readonly locale?: string|undefined;
  readonly wrapperSelector: string;
}

interface IUpcPayByBankProps {
  readonly merchant: MerchantData;
  readonly customer?: CustomerData|undefined;
  readonly buttonProps?: ButtonProps|undefined;
}
interface IUpcPayByBank extends IUpcPayByBankProps {
  addButton: (data: PaymentData) => void;
}

declare class UpcPayByBankClass {
  constructor(props: IUpcPayByBankProps);
  addButton(data: PaymentData): void;
}

declare global {
  interface Window {
    UpcPayByBank: typeof UpcPayByBankClass;
  }
}

export {};