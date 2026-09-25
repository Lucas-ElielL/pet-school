<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const api_url = 'http://localhost:3000/';
const pets = ref([]);
const tutores = ref([]);
const loading = ref(true);

async function carregarDados() {
  const respostaPets = await fetch(`${api_url}/pets`);
  pets.value = await respostaPets.json();
  console.log('Pets:', pets.value);

  const respostaTutores = await fetch(`${api_url}/tutores`);
  tutores.value = await respostaTutores.json();
  console.log('Tutores:', tutores.value);

  loading.value = false
}

function nometutor(tutorId) {
  for (const tutor of tutores.value) {
    if (tutor.id == tutor.value) {
      return tutor.value
    }
  }
}

onMounted(carregarDados);



</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: '/pet/novo' }"
    >
      Adicionar Pet
    </RouterLink>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Tutor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" pet in pets" :key="pet.id">
          <td>{{ pet.id }}</td>
          <td>{{ pet.nome }}</td>
          <td>{{ pet.idade }}</td>
          <td>{{ pet.especie }}</td>
          <td>{{ pet.tutorId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
