import { i18n } from './i18n';
import { LocaleCode } from '@/enums/LocaleCode';
import actionJSON from '@/locales/action.json';
import metaJSON from '@/locales/meta.json';
import textJSON from '@/locales/text.json';
import titleJSON from '@/locales/title.json';
import snackbarJSON from '@/locales/snackbar.json';
import { Storage } from '@/utils/Storage';
import labelJSON from '@/locales/label.json';

type MessagesDtoGet = Record<string, Record<string, string>>;

interface Messages {
  [key: string]: string;
}

interface FormattedMessages {
  [key: string]: Messages;
}

const messagesDto: MessagesDtoGet = {
  ...actionJSON,
  ...metaJSON,
  ...textJSON,
  ...titleJSON,
  ...snackbarJSON,
  ...labelJSON,
}

export const loadAndSetLocaleMessages = (): void => {
  const formattedMessages = [LocaleCode.En, LocaleCode.Uk].reduce<FormattedMessages>((acc, locale) => {
    const translate = Object.keys(messagesDto).reduce<Messages>((accumulator, key) => {
      const foundTranslate = messagesDto[key][locale];
      if (!accumulator[key]) {
        accumulator[key] = foundTranslate;
      }
      return accumulator;
    }, {});
    acc[locale] = translate;
    return acc;
  }, {});
  Object.keys(formattedMessages).forEach((locale) => {
    i18n.global.setLocaleMessage(locale, formattedMessages[locale]);
  });
};

export const setLocale = (locale: LocaleCode): void => {
  i18n.global.locale.value = locale;
  document.querySelector('html')?.setAttribute('lang', locale);
  document.title = i18n.global.t('meta.title');
  Storage.locale.setValue(locale);
};
