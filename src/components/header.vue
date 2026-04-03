<template>
  <header class="header">
    <h1 class="logo">{{ nombre }}</h1>

    <nav>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Skills</a>
    </nav>
  </header>
</template>

<script setup>
const nombre = "{{susanacst}}"
</script>