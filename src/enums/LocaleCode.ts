import greatBritain from '@/assets/images/locales/great-britain.png';
import ukraine from '@/assets/images/locales/ukraine.png';

export enum LocaleCode {
  En = 'en',
  Uk = 'uk',
}

export const Locales = [
  { code: LocaleCode.En, text: 'English', shortText: 'Eng', img: greatBritain },
  { code: LocaleCode.Uk, text: 'Українська', shortText: 'Укр', img: ukraine },
]

const isStringLocaleCode = (value: string | undefined): value is LocaleCode => {
  return (Object.values(LocaleCode) as string[]).includes(value ?? '');
};

export const getLocaleCodeFromValue = (value: string | undefined): LocaleCode | undefined => {
  return isStringLocaleCode(value) ? value : undefined;
};
