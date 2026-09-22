<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      PetSchool
    </a>
    <div class="container-fluid">
      <Router-link class="navbar-brand" to="/pets">
        Pets
      </Router-link>

    </div>
  </div>
</nav>
</template>
