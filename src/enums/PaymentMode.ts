export enum PaymentMode {
  Redirect = 'redirect',
  BuiltInIframe = 'built-in-iframe',
  ModalIframe = 'modal-iframe',
  PayByBank = 'pay-by-bank',
  Manual = 'manual',
}

export const isStringPaymentMode = (value: string | undefined): value is PaymentMode => {
  return (Object.values(PaymentMode) as string[]).includes(value ?? '');
};

export const getPaymentModeFromValue = (value: string | undefined): PaymentMode|undefined => {
  return (isStringPaymentMode(value) ? value : undefined);
};