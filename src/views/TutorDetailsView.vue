<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const tutores = ref([]);

  const API_URL = 'http://localhost:3000';


  async function carregarPet() {
  const respostaTutor = await fetch(`${API_URL}/tutores`);
  tutores.value = await respostaTutor.json();
  }

  onMounted(carregarPet);
</script>

<template>
  <h1> Nome do Pet: {{ tutores.nome }}</h1>
  <p> Espécie: {{ tutores.especie }}</p>
  <p> Tutor: {{ tutores.find(tutor => tutor.id === pet.tutorId)?.nome }}</p>

  <button class="btn default">
    <RouterLink :to="{ name: 'tutores' }">Voltar</RouterLink>
  </button>

</template>
