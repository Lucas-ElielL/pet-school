<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav>
    <div class="flex-column nav-pills gap-1">
      <Router-link to="/Pets">
        <i class="fa-solid fa-fire"></i>
        Pets
      </Router-link>

      <Router-link to="/pets/novo">
        <i class="fa-solid fa-plus"></i>
        Novo Pet
      </Router-link>

    </div>
  </nav>
</template>
