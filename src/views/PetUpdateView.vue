<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  const tutores = ref([]);
  const route = useRoute();
  const API_URL = 'http://localhost:3000';
  const novoTutor = {
    id: '',
    nome: '',
    telefone: '',
  }

  async function carregarTutor() {

  const respostaPet = await fetch(`${API_URL}/pets/${idPet}`);
  pet.value = await respostaPet.json();

  const respostaTutor = await fetch(`${API_URL}/tutores`);
  tutores.value = await respostaTutor.json();
  }
  async function atualizarNome(id, dados) {
    const resposta = await fetch(`${API_URL}/tutores/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(dados)
      }
    );

  }

  onMounted(carregarPet);
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
