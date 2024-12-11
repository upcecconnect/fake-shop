import { BillingAddress } from '@/types/Address';
import { RequestBean } from '@/types/RequestBean';

const LocalStorageKey = Object.freeze({
  Version : 'version',
  Locale: 'locale',
  RequestBeans: 'request-beans',
  BillingAddress: 'billing-address',
});

export const Storage = {
  LocalStorageVersion: '0',
  version: {
    getValue(): string {
      return localStorage.getItem(LocalStorageKey.Version) || '';
    },
    setValue(value: string): void {
      localStorage.setItem(LocalStorageKey.Version, value);
    },
  },
  locale: {
    getValue(): string {
      return localStorage.getItem(LocalStorageKey.Locale) ?? 'uk';
    },
    setValue(value: string): void {
      localStorage.setItem(LocalStorageKey.Locale, value);
    },
  },
  requestBeans: {
    getValue(): readonly RequestBean[] {
      const values = localStorage.getItem(LocalStorageKey.RequestBeans);
      if (values) {
        try {
          return JSON.parse(values);
        } catch (e) {
          console.error(e);
          return [];
        }
      }
      return [];
    },
    setValue(value: readonly RequestBean[]): void {
      localStorage.setItem(LocalStorageKey.RequestBeans, JSON.stringify(value));
    },
  },
  billingAddress: {
    getValue(): BillingAddress | null {
      return localStorage.getItem(LocalStorageKey.BillingAddress) ? JSON.parse(localStorage.getItem(LocalStorageKey.BillingAddress)!) : null;
    },
    setValue(value: BillingAddress): void {
      localStorage.setItem(LocalStorageKey.BillingAddress, JSON.stringify(value));
    }
  },
};