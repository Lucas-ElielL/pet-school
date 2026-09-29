import { createRouter, createWebHistory } from 'vue-router';
import PetViews from '../views/PetViews.vue';
import AddPetView from '../views/AddPetView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pets',
    },
    {
      path: '/pets',
      name: 'pets',
      component: PetViews,
    },
    {
      path: '/pets/novo',
      name: 'addPet',
      component: AddPetView,
    },
  ],
});

export default router;
