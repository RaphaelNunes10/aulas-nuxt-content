<!-- 
  Componente reutilizável estilo card que pode ser chamado pela tag "<MeuCard>" ou "<meu-card>"
-->
<template>
  <div class="border-t-2 pt-4">
    <!-- Diretiva v-if: O "h1" é renderizado com o texto da prop "titulo" apenas se "titulo" conter informações (não nulo)-->
    <h1 v-if="titulo">{{ titulo }}</h1>
    <div class="border-2 border-black rounded p-2">
      <!-- slot: Renderiza o que estiver entre a abertura e o fechamento da tag referente a este componente Ex.: <MeuCard>Este texto é renderizado no lugar do "slot"</MeuCard> -->
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps: Define propriedades expostas na tag referente a este componente Ex.: <MeuCard titulo="Nomes">Jão, Maria, Miguel</MeuCard>
defineProps<{
  titulo?: string
}>();
</script>

<style>

</style>