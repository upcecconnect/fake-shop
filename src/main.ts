import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router/routerInstance';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { getLocaleCodeFromValue } from './enums/LocaleCode';
import { LocaleCode } from './enums/LocaleCode';
import { loadAndSetLocaleMessages } from './i18n/setLocale';
import { setLocale } from './i18n/setLocale';
import { i18n } from '@/i18n/i18n';
import { Storage } from './utils/Storage';

if (Storage.version.getValue() !== Storage.LocalStorageVersion) {
  localStorage.clear();
  sessionStorage.clear();
  Storage.version.setValue(Storage.LocalStorageVersion);
}

loadAndSetLocaleMessages().then(() => {
  const locale = getLocaleCodeFromValue(Storage.locale.getValue()) ?? LocaleCode.Uk;
  setLocale(locale);
  
  createApp(App)
    .use(router)
    .use(createPinia())
    .use(i18n)
    .use(vuetify)
    .mount('#app')
  ;
})



