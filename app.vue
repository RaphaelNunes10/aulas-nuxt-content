<!-- 
 Componente principal 
 Sempre renderizado
 Útil para montar layout padrão para todas as páginas
-->
<template>
  <main class="container p-2 mx-auto prose">
    <!-- Remover e subistituir por coponentes e/ou elementos de sua preferência -->
    <h1>App (Layout Padrão)</h1>
    <!-- --- -->
    <!-- MeuCard: Coponente card de exemplo, encontrado na pasta "components" com mais informações -->
    <MeuCard titulo="Páginas:">
      <!-- NuxtPage: Componente Nuxt responsável por renderizar os componentes de página da pasta "pages" -->
      <NuxtPage/>
    </MeuCard>
    <!-- NuxtLink: Semelhante ao elemento <a>, porém funciona melhor com o sistema de roteamento por diretórios do Nuxt -->
    <NuxtLink v-if="$route.path !== '/'" href="../"><- Voltar</NuxtLink>
  </main>
</template>
