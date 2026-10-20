<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const novoTutor = ref({
  nome: '',
  telefone: '',
});

const router = useRouter();

// aqui estou declarando a API que vai retornar a listagem de todos os pets
// será reponsavel por cadastrar novos pets

const API_URL = 'http://localhost:3000';
const tutores = ref([]);
const carregandoTutores = ref(true);
const erro = ref('');

async function carregarTutores() {
  const resposta = await fetch(`${API_URL}/tutores`);
  console.log('load tutores', tutores);
  tutores.value = await resposta.json();
}

async function salvarTutor() {
  await fetch(`${API_URL}/tutores`, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoTutor.value),
  });
  router.push('/tutores');
}

onMounted(carregarTutores);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Adicionar Tutores</h1>
      <p class="text-body-secondary mb-0">Cadastro de Tutores no sistema.</p>
    </header>



    <p v-if="carregandoTutores">Carregando Tutores ...</p>
    <div v-else>
      <p
        v-if="erro"
        class="alert alert-danger"
        role="alert"
      >
        {{ erro }}
      </p>
    </div>

    <form @submit.prevent="salvarTutor">
      <div class="col-md-6">
        <label
          for="nome"
          class="form-label"
        >
          Nome do Tutor
        </label>

        <input
          type="text"
          id="nome"
          v-model="novoTutor.nome"
          class="form-control"
          required
        />
      </div>

      <div class="col-md-6">
        <label
          for="telefone"
          class="form-label"
        >
          Telefone
        </label>

        <input
          type="text"
          id="telefone"
          v-model="novoTutor.telefone"
          class="form-control"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Salvar Tutor
      </button>


    </form>
  </div>
</template>
