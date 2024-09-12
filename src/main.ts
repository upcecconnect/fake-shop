import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router/routerInstance';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(vuetify).mount('#app');