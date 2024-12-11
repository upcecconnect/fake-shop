import { BillingAddress } from '@/types/Address';
import { Storage } from '@/utils/Storage';

export const fetchBillingAddress = (): BillingAddress => {
  let address = Storage.billingAddress.getValue();
  if (!address) {
    address = {
      building: 'B-11',
      city: 'Kyiv',
      country: 'Ukraine',
      destination: 'Office',
      email: '',
      firstName: 'John',
      id: 1,
      label: 'Home',
      lastName: 'Doe',
      phone: '',
      phoneCode: '',
      street: 'Gareth Jones 8',
    };
    Storage.billingAddress.setValue(address);
  }
  return address;
}