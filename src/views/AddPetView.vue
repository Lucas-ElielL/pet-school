<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const API_URL = 'http://localhost:3000';
const tutores = ref({});
const novoPet = ref({
  nome: '',
  especie: '',
  tutorId: ''
});

const router = useRouter();

async function carregarTutores() {
  const resposta = await fetch(`${API_URL}/tutores`);
  console.log('load tutores', 'tutores');
  tutores.value = await resposta.json();
}
async function salvarPets() {
  await fetch(`${API_URL}/pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoPet.value)
  });
  console.log('load tutores', 'tutores');
  router.push('/pets');

}

onMounted(carregarTutores);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">Cadastro de Pets no sistema.</p>
    </header>

    <RouterLink class="btn btn-primary" :to="{ name: 'addPet' }">
      Adicionar Pet
    </RouterLink>

    <p v-if="carregarTutores">
      Carregando Tutores...
    </p>
    <div v-else>
      <p v-if="erro" class="alert alert-danger" role="alert">
        {{ erro }}
      </p>
    </div>

    <form @submit.prevent="salvarPet">
      <div class="col-md-6">
        <label for="nome" class="form-label">Nome do Pet</label>
        <input id="nome" v-model="novoPet.nome" class="form-control" placeholder="Nome do Pet" required />
      </div>
      <div class="col-md-6">
        <label for="especie" class="form-label">Espécie</label>
        <select id="especie" v-model="novoPet.especie" class="form-select" required>
          <option value="" disabled selected>Selecione a espécie</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="tutorId" class="form-label">Tutor</label>
        <select id="tutorId" v-model="novoPet.tutorId" class="form-select" required>
          <option value="" disabled selected>Selecione o tutor</option>
          <option v-for="tutor in tutores" :key="tutor.id"
          :value="tutor.id"
          >
          {{ tutor.nome }}
        </option>

        </select>
      </div>



    </form>
  </div>
</template>
