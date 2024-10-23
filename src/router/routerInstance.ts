import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';
import { RouteLocationNormalized } from 'vue-router';
import { RouteName } from './RouteName';
import { getPaymentModeFromValue } from '@/types/PaymentMode';
import { PaymentMode } from '@/types/PaymentMode';
import ProxyComponent from './ProxyComponent.vue';
import ConfigPage from '@/pages/config/index.vue';
import ProductsPage from '@/pages/products/index.vue';
import CheckoutPage from '@/pages/checkout/index.vue';
import TestCards from '@/pages/test-cards/index.vue';

const getPaymentMode = (route: RouteLocationNormalized) => {
  const mode = route.query.mode as string;
  const enumValue = getPaymentModeFromValue(mode);
  return { mode: enumValue ?? PaymentMode.Redirect };
}

export const router = createRouter({
    history: createWebHashHistory('/fake-shop'),
    routes: [
      {
        path: '',
        component: ProxyComponent,
        redirect: { name: RouteName.Config },
        children: [
          {
            path: '/config',
            name: RouteName.Config,
            component: ConfigPage,
          },
          {
            path: '/products',
            name: RouteName.Products,
            component: ProductsPage,
            props: (route) => {
              return getPaymentMode(route);
            },
          },
          {
            path: '/checkout',
            name: RouteName.Checkout,
            component: CheckoutPage,
            props: (route) => {
              return getPaymentMode(route);
            },
          },
          {
            path: '/test-cards',
            name: RouteName.TestCards,
            component: TestCards,
          },
          {
            path: '/:pathMatch(.*)*',
            redirect: { name: RouteName.Config },
          },
        ],
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: RouteName.Config },
      },
    ]
});
