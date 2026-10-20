import { createRouter, createWebHistory } from 'vue-router';
import PetViews from '../views/PetViews.vue';
import AddPetView from '../views/AddPetView.vue';
import TutoresView from '@/views/TutoresView.vue';

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
    {
      path: '/pets/:id',
      name: 'detalhes-pet',
      component: () => import('../views/PetDetailsView.vue'),
    },
    {
      path: '/pets/atualizar/:id',
      name: 'atualiuzar-pet',
      component: () => import('../views/PetUpdateView.vue'),
    },
    {
      path: '/tutores',
      name: 'tutores',
      component: TutoresView,
    },
    {
      path: '/tutores/:id',
      name: 'detalhes-tutor',
      component:  () => import('@/views/TutoresDetailsView.vue')
    },
    {
      path: '/tutores/novo',
      name: 'adicionar-tutor',
      component: () => import('@/views/AddTutores.vue')
    },

  ],
});

export default router;
