import { BillingAddress } from '@/types/Address';
import { Storage } from '@/utils/Storage';

export const updateBillingAddress = (address: BillingAddress) => {
  Storage.billingAddress.setValue(address);
}