import AddPetView from '@/components/layout/AddPetView.vue';
import PetViews from '@/components/layout/PetViews.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pets'
    },
    {
      path: '/pets',
      name: '/pets',
      component: PetViews
    },
    {
      path: '/pet/novo',
      name: '/pet/novo',
      component: AddPetView
    },
  ],
});

export default router;
