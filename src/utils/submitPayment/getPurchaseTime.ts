import { format } from 'fecha';

export const getPurchaseTime = () => {
  return format(new Date(), 'YYMMDDHHmmss');
}