import { PaymentMode } from '@/types/PaymentMode';
import { PaymentIframeCallbackData } from 'upc-payment-js';

export const iframeCallback = (callbackData: PaymentIframeCallbackData, mode: PaymentMode) => {
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