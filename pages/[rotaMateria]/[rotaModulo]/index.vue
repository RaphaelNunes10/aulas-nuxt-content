<!-- 
  Página índice de módulos Ex.: localhost:3000/desenvolvimento-de-aplicativos/angular
-->
<template>
  <h1>Página {{ tituloMateria }} - {{ tituloModulo }}</h1>

  <!-- Lista desordenada de links para cada conteudo de aula encontradas nas pastas de módulo das pastas de matéria em "content"  -->
  <ul class="list-disc">
    <!-- Diretiva v-for: Rendriza um item de lista com links para cada aula em aulas, exibindo titulo e utilizando caminho de cada "aula" -->
    <li v-for="aula in aulas" :key="aula._id">
      <!-- NuxtLink: Semelhante ao elemento <a>, porém funciona melhor com o sistema de roteamento por diretórios do Nuxt -->
      <NuxtLink :to="aula._path+'/'">{{ aula.title }}</NuxtLink>
      <br>
    </li>
  </ul>
</template>

<script lang="ts" setup>
/**
 * rotaMateria: Parâmetro de rota dinâmica referente a pasta "[rotaMateria]"
 * rotaModulo: Parâmetro de rota dinâmica referente a pasta "[rotaModulo]"
 */
const { rotaMateria, rotaModulo } = useRoute().params;

// useConteudo: composable "conteudo" encontrada na pasta "composables" com mais informações
const { tituloMateria, tituloModulo, aulas } = useConteudo(rotaMateria, rotaModulo);
</script>

<style>

</style>