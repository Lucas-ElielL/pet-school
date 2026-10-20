<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  const tutor = ref({});

  const route = useRoute();
  const API_URL = 'http://localhost:3000';
  const pets = ref([]);

  async function carregarTutor() {
    const idTutor = route.params.id;
    console.log('Id do Tutor:', idTutor);


  const respostaTutor = await fetch(`${API_URL}/tutores/${idTutor}`);
  tutor.value = await respostaTutor.json();
  }
  /*async function carregarPets() {
    const respostaPets = await fetch(`${API_URL}/pets/?tutorId=${id}`);
    pets.value = await respostaPets.json();
  }*/
  onMounted(carregarTutor());
</script>

<template>
  <h1> Nome do Tutor: {{ tutor.nome }}</h1>
  <p> Telefone: {{ tutor.telefone }}</p>
  <ul>
    <li v-for="pet in pets" :key="pet.id">
      {{ pet.nome }} - {{ pet.especie }}
    </li>
  </ul>

  <button class="btn default">
    <RouterLink :to="{ name: 'tutores' }">Voltar</RouterLink>
  </button>

</template>
