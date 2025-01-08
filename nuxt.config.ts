// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // compatibilidade de recursos da data especificada
  devtools: { enabled: true }, // Componente de depuração que aparece em baixo da aplicação durante desenvolvimento
  ssr: true, // Habillita/desabilita renderização no servidor (dados podem ser capturados no servidor e a página vai montada para o cliente)
  app: {
    head: { // Header padrão
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Aulas Nuxt Content'
    }
  },
  modules: ['@nuxt/content'], // Múdulos Nuxt (Nuxt aceita módulos, plugins Vue, pacotes NPM estilo webpack e scripts externos, sendo módulos Nuxt mais fácil de instalar)
  css: ['~/assets/css/main.css'], // Folha de estilo global
  postcss: { // PostCSS já vem instalado com o Nuxt e torna plugins como Taillwind mais dinâmico e responsível, além de acrescentar algumas funcionalidades
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})