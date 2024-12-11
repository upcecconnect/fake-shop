import { i18n } from './i18n';
import { LocaleCode } from '@/enums/LocaleCode';
import { Storage } from '@/utils/Storage';

type MessagesDtoGet = Record<string, Record<string, string>>;

interface Messages {
  [key: string]: string;
}

interface FormattedMessages {
  [key: string]: Messages;
}


export const loadAndSetLocaleMessages = async (): Promise<void> => {
  const response = await Promise.all([
    import('@/locales/action.json'),
    import('@/locales/meta.json'),
    import('@/locales/text.json'),
    import('@/locales/title.json'),
    import('@/locales/snackbar.json'),
    import('@/locales/label.json'),
  ]);

  const messagesDto = response.reduce<MessagesDtoGet>((acc, item) => {
    const locales = item.default;
    acc = {
      ...acc,
      ...locales,
    }
    return acc;
  }, {});

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
