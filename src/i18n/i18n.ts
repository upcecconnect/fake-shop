import { LocaleCode } from '@/enums/LocaleCode';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  fallbackLocale: LocaleCode.En,
});
