import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CountryPage from '../pages/CountryPage.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'country',
    path: '/:countryCode:',
    component: CountryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
