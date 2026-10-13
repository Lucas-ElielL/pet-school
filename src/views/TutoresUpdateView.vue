<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const pet = ref({});
  const tutores = ref([]);
  const API_URL = 'http://localhost:3000';
  const petNome = ref('');

  async function carregarTutor() {
  const respostaTutor = await fetch(`${API_URL}/tutores`);
  tutores.value = await respostaTutor.json();
  }

  onMounted(carregarTutor);
</script>

<template>
  <h1> Nome do Pet: {{ pet.nome }}</h1>
  <label for="nome">Atualizar o Nome:</label>
  <input type="text" name="nome" id="nome"  v-model="petNome">
  <button @click="atualizarNome" class="btn btn-primary">Atualizar</button>
  <p> Espécie: {{ pet.especie }}</p>
  <p> Tutor: {{ tutores.find(tutor => tutor.id === pet.tutorId)?.nome }}</p>

  <button class="btn default">
    <RouterLink :to="{ name: 'pets' }">Voltar</RouterLink>
  </button>

</template>
