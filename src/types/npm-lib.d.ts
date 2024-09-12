type PaymentMode = 'PaymentIframe' | 'PaymentPage';
type CallbackFunction = (event: 'loaded' | 'failure' | 'success' | 'go-back' | 'try-again') => void;
interface IframeProps {
    readonly wrapperSelector?: string | undefined;
    readonly callback?: CallbackFunction;
}
interface MerchantData {
    readonly id: string;
    readonly terminalId: string;
    readonly signature: string;
}
interface PaymentData {
    readonly altCurrencyNumericCode?: string | undefined;
    readonly altFeeCents?: number | undefined;
    readonly altTotalAmountCents?: number | undefined;
    readonly currencyNumericCode: string;
    readonly delay?: number | undefined;
    readonly description: string;
    readonly feeCents?: number | undefined;
    readonly locale?: string | undefined;
    readonly orderId: string;
    readonly purchaseTime: number;
    readonly recurrent?: string | undefined;
    readonly recurrentDescription?: string | undefined;
    readonly token?: string | undefined;
    readonly totalAmountCents: number;
    readonly url?: string | undefined;
}
interface CustomerData {
    readonly email?: string | undefined;
    readonly phoneCountryCode?: string | undefined;
    readonly phoneNumber?: string | undefined;
    readonly firstName?: string | undefined;
    readonly lastName?: string | undefined;
}
interface UpcPaymentProps {
    readonly mode?: PaymentMode | undefined;
    readonly merchant: MerchantData;
    readonly payment: PaymentData;
    readonly customer?: CustomerData | undefined;
    readonly iframeProps?: IframeProps | undefined;
}

declare global {
  interface Window {
      UpcPayment?: (props: UpcPaymentProps) => void;
  }
}

export {};