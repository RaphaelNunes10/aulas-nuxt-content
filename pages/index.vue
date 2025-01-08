<!-- 
  Página índice principal Ex.: localhost:3000/
-->
<template>
  <h1>Página índice</h1>

  <!-- Lista desordenada de links para cada pasta de matéria encontradas na pasta "content"  -->
  <ul class="list-disc">
    <!-- Diretiva v-for: Rendriza um item de lista com links para cada materia em materias, exibindo titulo e utilizando caminho de cada "materia" -->
    <li v-for="materia in materias" :key="materia._id">
      <!-- NuxtLink: Semelhante ao elemento <a>, porém funciona melhor com o sistema de roteamento por diretórios do Nuxt -->
      <NuxtLink :href="materia._path +'/'">{{ materia.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
// useConteudo: composable "conteudo" encontrada na pasta "composables" com mais informações
const { materias } = useConteudo();
</script>

<style>

</style>