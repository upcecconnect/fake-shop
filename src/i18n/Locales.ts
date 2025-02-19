import greatBritain from '@/assets/images/locales/great-britain.svg';
import ukraine from '@/assets/images/locales/ukraine.svg';
import { LocaleCode } from '@/enums/LocaleCode';
import type { Locale } from '@/types/Locale';


export const Locales: readonly Locale[] = [
    { code: LocaleCode.En, text: 'English', shortText: 'Eng', img: greatBritain },
    { code: LocaleCode.Uk, text: 'Українська', shortText: 'Укр', img: ukraine },
]