import { createRouter } from 'vue-router';
import { RouteLocationNormalized } from 'vue-router';
import { createWebHistory } from 'vue-router';
import { RouteName } from './RouteName';
import { getPaymentModeFromValue } from '@/types/PaymentMode';
import { PaymentMode } from '@/types/PaymentMode';
import ProxyComponent from './ProxyComponent.vue';

const getPaymentMode = (route: RouteLocationNormalized) => {
  let mode = route.query.mode as string;
  const enumValue = getPaymentModeFromValue(mode);
  return { mode: enumValue ?? PaymentMode.Redirect };
}

export const router = createRouter({
    history: createWebHistory('/'),
    routes: [
      {
        path: '',
        component: ProxyComponent,
        redirect: { name: RouteName.Config },
        children: [
          {
            path: '/config',
            name: RouteName.Config,
            component: () => import('@/pages/config/index.vue'),
          },
          {
            path: '/products',
            name: RouteName.Products,
            component: () => import('@/pages/products/index.vue'),
            props: (route) => {
              return getPaymentMode(route);
            },
          },
          {
            path: '/checkout',
            name: RouteName.Checkout,
            component: import('@/pages/checkout/index.vue'),
            props: (route) => {
              return getPaymentMode(route);
            },
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
