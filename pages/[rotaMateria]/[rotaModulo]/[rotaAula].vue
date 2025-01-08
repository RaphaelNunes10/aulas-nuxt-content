<!-- 
  Página responsável por exibir o conteudo das aulas Ex.: localhost:3000/desenvolvimento-de-aplicativos/angular/aula1
-->
<template>
  <h1>Página {{ tituloMateria }} - {{ tituloModulo }} - {{ tituloAula }}</h1>
  <!-- MeuCard: Coponente card de exemplo, encontrado na pasta "components" com mais informações -->
  <MeuCard titulo="Conteúdo Aula">
    <!-- ContentDoc: Componente do Nuxt Content responsável por renderizar os documentos markdown (.md) enotrados na pasta "content" -->
    <ContentDoc/>
  </MeuCard>
</template>

<script lang="ts" setup>
/**
 * rotaMateria: Parâmetro de rota dinâmica referente a pasta "[rotaMateria]"
 * rotaModulo: Parâmetro de rota dinâmica referente a pasta "[rotaModulo]"
 * rotaAula: Parâmetro de rota dinâmica referente a pasta "[rotaAula]"
 */
const { rotaMateria, rotaModulo, rotaAula } = useRoute().params;

// useConteudo: composable "conteudo" encontrada na pasta "composables" com mais informações
const { tituloMateria, tituloModulo, tituloAula } = useConteudo(rotaMateria, rotaModulo, rotaAula);
</script>