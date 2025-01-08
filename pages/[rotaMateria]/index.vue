<!-- 
  Página índice de matérias Ex.: localhost:3000/desenvolvimento-de-aplicativos/
-->
<template>
  <h1>Página {{ tituloMateria }}</h1>

  <!-- Lista desordenada de links para cada pasta de módulo encontradas nas pastas de matéria em "content"  -->
  <ul class="list-disc">
    <!-- Diretiva v-for: Rendriza um item de lista com links para cada modulo em modulos, exibindo titulo e utilizando caminho de cada "modulo" -->
    <li v-for="modulo in modulos" :key="modulo._id">
      <!-- NuxtLink: Semelhante ao elemento <a>, porém funciona melhor com o sistema de roteamento por diretórios do Nuxt -->
      <NuxtLink :to="modulo._path+'/'">{{ modulo.title }}</NuxtLink>
      <br>
    </li>
  </ul>
</template>

<script lang="ts" setup>
// rotaMateria: Parâmetro de rota dinâmica referente a pasta "[rotaMateria]" 
const { rotaMateria } = useRoute().params;

// useConteudo: composable "conteudo" encontrada na pasta "composables" com mais informações
const { tituloMateria, modulos } = useConteudo(rotaMateria);
</script>

<style>

</style>